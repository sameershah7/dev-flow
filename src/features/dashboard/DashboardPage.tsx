import ChartHeader from "./components/ChartHeader";
import TaskItem from "./components/TaskItem";
import StatsCard from "./components/StatsCard";
import { useState } from "react";

interface Task {
    id: number;
    name: string;
    due: string;
    priority: "high" | "med" | "low";
    done: boolean;
}

export function DashboardPage() {
    const [tasks, setTasks] = useState<Task[]>(tasksData);

    const handleToggle = (id: number | string) => {
        setTasks(prev => prev.map(i => i.id === Number(id) ? { ...i, done: !i.done } : i));
    }

    // Data for statCard
    const totalTask = tasks.length;
    const completedTask = tasks.filter(i => i.done === true).length;
    const inProgress = tasks.filter(i => i.done === false).length;
    const highPriority = tasks.filter(i => i.priority === "high" && i.done !== true).length;
    const completionPercentage = totalTask > 0 ? Math.round((completedTask / totalTask) * 100) : 0;

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    label="Total Tasks"
                    delta="All tasks"
                    value={totalTask}
                    color="var(--color-text-muted)"
                />
                <StatsCard
                    label="Completed"
                    delta={`${completionPercentage}% done`}
                    value={completedTask}
                    color="var(--color-success)"
                />
                <StatsCard
                    label="In Progress"
                    delta="Active"
                    value={inProgress}
                    color="var(--color-primary)"
                />
                <StatsCard
                    label="High Priority"
                    delta="Needs attention"
                    value={highPriority}
                    color="var(--color-error)"
                />

            </div>

            {/* Tasks Container */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden min-h-[350px]">
                <ChartHeader />

                <div className="flex flex-col">
                    {tasks.map((item) => (
                        <TaskItem
                            key={item.id}
                            id={item.id.toString()}
                            title={item.name}
                            priority={item.priority === "med" ? "Medium" : item.priority === "high" ? "High" : "Low"}
                            isCompleted={item.done}
                            onToggle={handleToggle}
                        />))}
                </div>

                {tasks.length === 0 && (
                    <div className="p-10 text-center text-text-muted italic">
                        All caught up!
                    </div>
                )}
            </div>
        </div>
    );
}


const tasksData: Task[] = [
    { id: 1, name: "Design system audit", due: "Apr 24", priority: "high", done: false },
    { id: 2, name: "User interview prep", due: "Apr 25", priority: "med", done: false },
    { id: 3, name: "Update onboarding flow", due: "Apr 26", priority: "med", done: true },
    { id: 4, name: "Write release notes", due: "Apr 28", priority: "low", done: false },
    { id: 5, name: "Fix nav bar bug", due: "Apr 22", priority: "high", done: true },
    { id: 6, name: "Refactor auth module", due: "Apr 29", priority: "high", done: false },
    { id: 7, name: "Add dark mode support", due: "May 1", priority: "med", done: false },
    { id: 8, name: "Write unit tests for API", due: "May 3", priority: "low", done: false },
    { id: 9, name: "Deploy staging build", due: "Apr 23", priority: "high", done: true },
    { id: 10, name: "Review pull requests", due: "Apr 22", priority: "med", done: true },
];
