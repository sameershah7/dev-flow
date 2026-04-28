
import { Button } from "../ui/Button";

interface ConfirmationModalProps {
    title: string;
    description: string;
    confirmLabel: string;
    variant?: "danger" | "primary" | "ghost";
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function ConfirmationModal({
    title,
    description,
    confirmLabel,
    variant = "danger",
    isOpen,
    onClose,
    onConfirm
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 h-screen">
            <div
                className="absolute inset-0 bg-text-main/40 backdrop-blur-xs"
                onClick={onClose}
            />

            <div className="relative bg-bg border border-border w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                <h3 className="text-lg font-bold text-text-main">{title}</h3>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex justify-end gap-3 mt-6">
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button variant={variant} onClick={onConfirm}>
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}

