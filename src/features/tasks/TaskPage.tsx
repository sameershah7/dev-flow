import { useState } from "react";
import { useTaskStore } from "../../store/useTaskStore";

import { TaskHeader } from "./components/TaskHeader";
import { DeleteTaskModal } from "../../shared/components/feedback/DeleteTaskModal";
import { TaskTable } from "./components/TaskTabal";

export default function TasksPage() {
    const [activeFilter, setActiveFilter] = useState<"all" | "pending" | "completed">("all");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

    // const tasks = useTaskStore((state) => state.tasks);
    // const deleteTask = useTaskStore((state) => state.deleteTask);
    const { tasks, searchQuery, deleteTask } = useTaskStore();

    const filteredTasks = tasks
        .filter((t) => {
            if (activeFilter === "pending") return !t.done;
            if (activeFilter === "completed") return t.done;
            return true;
        })
        .filter((t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const openDeleteModal = (id: number) => {
        setSelectedTaskId(id);
        setIsDeleteModalOpen(true);
    };

    const handleTaskDelete = () => {
        if (selectedTaskId !== null) {
            deleteTask(selectedTaskId);
        }
        setIsDeleteModalOpen(false);
        setSelectedTaskId(null);
    };

    return (
        <div className="space-y-6">

            {isDeleteModalOpen &&
                <DeleteTaskModal
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleTaskDelete}
                />}

            <TaskHeader
                currentFilter={activeFilter}
                onFilter={(val) => setActiveFilter(val)}
            />

            <div className="bg-surface border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <TaskTable tasks={filteredTasks} onDelete={openDeleteModal} />
                </div>
            </div>

        </div>
    );
}
