import { type Note } from "../../../store/useNoteStore";
import { NoteCard } from "./NoteCard";
import { EmptyState } from "../../../shared/components/ui/EmptyState";

type NoteGridProps = {
    notes: Note[];
    updateNote: (data: Note) => void;
    deltedNote: (id: number) => void;
}

export function NotesGrid({ notes, updateNote, deltedNote }: NoteGridProps) {
    if (notes.length === 0) {
        return <EmptyState description="No notes found. Start by adding one!" />
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    note={note}
                    deleteNote={deltedNote}
                    updateNote={updateNote}
                />
            ))}
        </div>
    );
}

