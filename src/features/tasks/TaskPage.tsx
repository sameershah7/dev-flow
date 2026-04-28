import { useState } from "react";
import { useTaskStore, type Task } from "../../store/useTaskStore";

import { TaskHeader } from "./components/TaskHeader";
import { TaskTable } from "./components/TaskTabal";
import { ConfirmationModal } from "../../shared/components/feedback/ConfirmationModal";
import { TaskFormModal } from "../../shared/components/ui/TaskFormModal";

export default function TasksPage() {
    const [activeFilter, setActiveFilter] = useState<"all" | "pending" | "completed">("all");
    const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedEditTask, setSelectedEditTask] = useState<Task>()
    const [showDelete, setShowDelete] = useState(false)

    const { tasks, searchQuery, deleteTask, toggleTask, updateTask } = useTaskStore();

    const filteredTasks = tasks
        .filter((t) => {
            if (activeFilter === "pending") return !t.done;
            if (activeFilter === "completed") return t.done;
            return true;
        })
        .filter((t) => {
            const words = (t.title)
                .toLowerCase()
                .split(/\s+/);

            return words.some(word => word.startsWith(searchQuery));
        })

    const handleUpdateTask = (data: Task) => {
        if (selectedEditTask) {
            updateTask(selectedEditTask.id, data);
        }
        setIsEditModalOpen(false);
    }

    const openEditModal = (task: Task) => {
        setSelectedEditTask(task);
        setIsEditModalOpen(true);
    };

    const handleDelete = () => {
        if (deleteTaskId !== null) {
            deleteTask(deleteTaskId);
        }
        setShowDelete(false);
        setDeleteTaskId(null);
    };

    return (
        <div className="space-y-6">
            {isEditModalOpen &&
                <TaskFormModal
                    toggleModal={() => setIsEditModalOpen(false)}
                    onSave={handleUpdateTask}
                    initialData={selectedEditTask}
                />
            }


            {showDelete &&
                <ConfirmationModal
                    isOpen={showDelete}
                    title="Delete Task?"
                    description="This will permanently erase your Task. You can't undo this."
                    confirmLabel="Delete Task"
                    variant="danger"
                    onClose={() => setShowDelete(false)}
                    onConfirm={handleDelete}
                />
            }

            <TaskHeader
                currentFilter={activeFilter}
                onFilter={(val) => setActiveFilter(val)}
            />

            <div className="bg-surface border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <TaskTable
                        tasks={filteredTasks}
                        onDelete={(id) => {
                            setDeleteTaskId(id)
                            setShowDelete(true)
                        }}
                        isComplete={toggleTask}
                        editTask={openEditModal}
                    />
                </div>
            </div>

        </div>
    );
}
