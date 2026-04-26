import { Button } from "../../../shared/components/ui/Button";
import { type Note } from "../../../store/useNoteStore";

type NoteCardProps = {
    note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <div className="p-4 flex flex-col h-full bg-bg border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
                <h5 className="mb-2 text-xl font-bold text-text-main tracking-tight border-b border-border pb-1">
                    {note.title}
                </h5>

                <p className="mb-4 text-sm text-text-main leading-relaxed">
                    {note.content}
                </p>
            </div>

            <div className="mt-auto pt-4">
                <div className="flex flex-col gap-1 mb-3 text-xs text-text-main">
                    <span className="text-text-muted">Created: {note.createdAt}</span>
                </div>

                <div className="flex justify-end gap-3">
                    <Button variant="ghost">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </div>
        </div>
    );
};

