import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-text/40 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-3xl bg-bg border border-border rounded-2xl shadow-2xl overflow-hidden">
                {children}
            </div>
        </div>
    );
}
