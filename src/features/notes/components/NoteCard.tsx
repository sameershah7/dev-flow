import { Button } from "../../../shared/components/ui/Button";
import { type Note } from "../../../store/useNoteStore"

type NoteCardProps = {
    note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <div className="p-4 bg-bg border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="mb-2 text-xl font-bold text-text-main tracking-tight border-b border-border pb-1 bg-bg">
                {note.title}
            </h5>

            <p className="mb-4 text-sm text-main text-text-main  leading-relaxed">
                {note.content}
            </p>

            <div className="flex flex-col gap-1 mb-5 text-xs text-text-main">
                <span className="text-text-muted">Created: {note.createdAt}</span>
            </div>

            <div className="flex justify-end gap-3">
                <Button children="Edit" variant="ghost" />
                <Button children="Delete" variant="danger" />
            </div>
        </div>
    );
};
