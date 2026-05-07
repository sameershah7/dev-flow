import { useState, useEffect } from "react";
import { Modal } from "../../../shared/components/ui/Modal";
import { type Note } from "../../../store/useNoteStore";
import { Button } from "../../../shared/components/ui/Button";

interface NoteFormModalProps {
    toggleModal: () => void;
    onSave: (data: { title: string; content: string }) => void;
    initialData?: Note | null;
}

export function NoteFormModal({ toggleModal, onSave, initialData }: NoteFormModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
        }
    }, [initialData]);

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) return;

        onSave({
            title,
            content,
        });

        toggleModal();
    };

    const isEditMode = !!initialData;

    return (
        <Modal onClose={toggleModal}>
            <div className="p-4 border-b border-border bg-surface/50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-text">
                    {isEditMode ? "Update Note" : "New Note"}
                </h2>
                <Button children="x" onClick={toggleModal} />
            </div>

            <div className="p-6 space-y-5">
                <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">
                        Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Note title..."
                        className="w-full bg-surface border border-border text-text rounded-lg px-4 py-2 outline-none focus:border-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5">
                        Content
                    </label>
                    <textarea
                        rows={5}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your thoughts..."
                        className="w-full bg-surface border border-border text-text rounded-lg px-4 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-4 bg-surface/30 border-t border-border">
                <Button children="Cancel" variant="ghost" onClick={toggleModal} />
                <Button children={isEditMode ? "Save Changes" : "Create Note"} onClick={handleSubmit} />
            </div>
        </Modal>
    );
}
