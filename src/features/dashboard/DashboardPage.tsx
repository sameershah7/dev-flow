import { useState } from "react";
import { useTaskStore } from "../../store/useTaskStore";

import ChartHeader from "./components/ChartHeader";
import TaskItem from "./components/TaskItem";
import StatsCard from "./components/StatsCard";
import AddTaskModal from "./components/AddTaskModal";

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addTask = useTaskStore((state) => state.addTask);
    const getStats = useTaskStore((state) => state.getStats);
    const uncompleteTasks = useTaskStore((state) => state.tasks);
    const toggleTask = useTaskStore((state) => state.toggleTask);

    const stats = getStats();
    const pendingTasks = uncompleteTasks
        .filter(t => !t.done)
        .sort((a, b) => b.id - a.id) // Newest IDs (timestamps) first
        .slice(0, 10); const handleModal = (): void => {
            setIsModalOpen(!isModalOpen);
        }

    const handleAddTask = (newTaskData: { title: string; priority: "high" | "med" | "low" }) => {
        addTask(newTaskData.title, newTaskData.priority);
    };
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    label="Total Tasks"
                    delta="All tasks"
                    value={stats.total}
                    color="var(--color-text-muted)"
                />
                <StatsCard
                    label="Completed"
                    delta={`${stats.completionRate}% done`}
                    value={stats.completed}
                    color="var(--color-success)"
                />
                <StatsCard
                    label="In Progress"
                    delta="Active"
                    value={stats.inProgress}
                    color="var(--color-primary)"
                />
                <StatsCard
                    label="High Priority"
                    delta="Needs attention"
                    value={stats.highPriority}
                    color="var(--color-error)"
                />

            </div>

            {/* Tasks Container */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden min-h-87.5">
                <ChartHeader toggleModal={handleModal} />
                {isModalOpen && <AddTaskModal toggleModal={handleModal} onAddTask={handleAddTask} />}
                <div className="flex flex-col">
                    {pendingTasks.map((item) => (
                        <TaskItem
                            key={item.id}
                            id={item.id}
                            title={item.title.length > 150 ? item.title.slice(0, 80) + "..." : item.title}
                            priority={item.priority === "med" ? "Medium" : item.priority === "high" ? "High" : "Low"}
                            isCompleted={item.done}
                            onToggle={() => toggleTask(item.id)}
                        />))}
                </div>

                {pendingTasks.length === 0 && (
                    <div className="p-10 text-center text-text-muted italic">
                        All caught up!
                    </div>
                )}
            </div>
        </div>
    );
}
