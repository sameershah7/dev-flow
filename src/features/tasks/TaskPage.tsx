import { useState } from "react";
import { useTaskStore, type Task } from "../../store/useTaskStore";

import { TaskHeader } from "./components/TaskHeader";
import { DeleteTaskModal } from "../../shared/components/feedback/DeleteTaskModal";
import { TaskTable } from "./components/TaskTabal";
import { TaskFormModal } from "../../shared/components/ui/TaskFormModal";

export default function TasksPage() {
    const [activeFilter, setActiveFilter] = useState<"all" | "pending" | "completed">("all");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedEditTask, setSelectedEditTask] = useState<Task>()

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

    const openDeleteModal = (id: number) => {
        setSelectedTaskId(id);
        setIsDeleteModalOpen(true);
    };

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

    const handleTaskDelete = () => {
        if (selectedTaskId !== null) {
            deleteTask(selectedTaskId);
        }
        setIsDeleteModalOpen(false);
        setSelectedTaskId(null);
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


            {isDeleteModalOpen &&
                <DeleteTaskModal
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleTaskDelete}
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
                        onDelete={openDeleteModal}
                        isComplete={toggleTask}
                        editTask={openEditModal}
                    />
                </div>
            </div>

        </div>
    );
}
