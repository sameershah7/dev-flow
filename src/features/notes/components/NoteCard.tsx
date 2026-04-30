import { Button } from "../../../shared/components/ui/Button";
import { SearchTextHighlight } from "../../../shared/components/ui/SearchTextHighlight";
import { useNoteStore, type Note } from "../../../store/useNoteStore";

type NoteCardProps = {
    note: Note;
    updateNote: (data: Note) => void;
    deleteNote: (id: number) => void;
    viewMore?: (data: Note) => void;
}

export function NoteCard({ note, updateNote, deleteNote, viewMore }: NoteCardProps) {
    const { searchQuery } = useNoteStore();

    const content = note.content.length > 59 ? note.content.slice(0, 55) : note.content;

    return (
        <div className="p-4 flex flex-col h-full bg-bg border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
                <h5 className="mb-2 text-xl font-bold text-text-main tracking-tight border-b border-border pb-1">
                    {searchQuery ? <SearchTextHighlight text={note.title} query={searchQuery} /> : note.title}
                    {note.title.length > 34 && searchQuery && note.title}
                </h5>

                <div className="mb-4 text-sm text-text-main leading-relaxed">
                    {searchQuery ? <SearchTextHighlight text={content} query={searchQuery} /> : content}
                    {note.content.length > 55 && (
                        <span className="underline cursor-pointer ml-1" onClick={() => viewMore?.(note)}> More...</span>
                    )}
                </div>
            </div>

            <div className="mt-auto pt-4">
                <div className="flex flex-col gap-1 mb-3 text-xs text-text-main">
                    <span>
                        {!note.updatedAt
                            ? `Created: ${note.createdAt}`
                            : `Updated: ${note.updatedAt}`}
                    </span>
                </div>

                <div className="flex justify-end gap-3">
                    <Button variant="ghost" onClick={() => updateNote(note)}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteNote(note.id)}>Delete</Button>
                </div>
            </div>
        </div>
    );
};
