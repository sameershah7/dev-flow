import { useState } from "react";

interface AddTaskModalProps {
    toggleModal: () => void;
    onAddTask: (taskData: { title: string; priority: "high" | "med" | "low" }) => void;
}

export default function AddTaskModal({ toggleModal, onAddTask }: AddTaskModalProps) {
    const [title, setTask] = useState("");
    const [priority, setPriority] = useState<"high" | "med" | "low">("med");

    const handleSubmit = () => {
        if (!title.trim()) return;

        onAddTask({
            title,
            priority,
        });

        toggleModal();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-text-main/40 backdrop-blur-xs" onClick={toggleModal} />

            <div className="relative w-full max-w-3xl bg-bg border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-surface/50 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-text-main">New Task</h2>
                    <button onClick={toggleModal} className="text-text-muted hover:text-text-main text-2xl">×</button>
                </div>

                <div className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1.5">Priority</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value as any)}
                            className="w-full bg-surface border border-border text-text-main rounded-lg px-4 py-2 outline-none focus:border-primary cursor-pointer appearance-none"
                        >
                            <option value="low">Low Priority</option>
                            <option value="med">Medium Priority</option>
                            <option value="high">High Priority</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1.5">Task Description</label>
                        <textarea
                            rows={4}
                            value={title}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="What needs to be done?"
                            className="w-full bg-surface border border-border text-text-main rounded-lg px-4 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-4 bg-surface/30 border-t border-border">
                    <button onClick={toggleModal} className="px-4 py-2 text-sm text-text-main hover:bg-hover rounded-lg">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 text-sm font-semibold bg-primary text-white hover:brightness-110 rounded-lg active:scale-95 transition-all shadow-md"
                    >
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    );
}

