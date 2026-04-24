import { Button } from "../ui/Button";

interface DeleteTaskModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export function DeleteTaskModal({ onClose, onConfirm }: DeleteTaskModalProps) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 h-screen">
            <div
                className="absolute inset-0 bg-text-main/40 backdrop-blur-xs"
                onClick={onClose}
            />

            <div className="relative bg-bg border border-border w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                <h3 className="text-lg font-bold text-text-main">Delete Task?</h3>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">
                    This action cannot be undone. Are you sure you want to remove this task from your list?
                </p>

                <div className="flex justify-end gap-3 mt-6">
                    <Button children="Cancel" variant="ghost" onClick={onClose} />
                    <Button children="Delete Task" variant="danger" onClick={onConfirm} />
                </div>
            </div>
        </div>
    );
}
