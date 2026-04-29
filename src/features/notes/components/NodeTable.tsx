import { Button } from "../../../shared/components/ui/Button";
import { SearchTextHighlight } from "../../../shared/components/ui/SearchTextHighlight";
import { type Note, useNoteStore } from "../../../store/useNoteStore";

type NoteTableProps = {
    notes: Note[];
    deleteNote: (id: number) => void;
    updateNote: (data: Note) => void;
};

export function NoteTable({ notes, deleteNote, updateNote }: NoteTableProps) {

    const { searchQuery } = useNoteStore();

    const TITLE_LIMIT = 30;
    const CONTENT_LIMIT = 50;

    return (
        <div className="bg-surface border border-border rounded-xl overflow-hidden mt-2">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-bg/50 border-b border-border uppercase text-text-muted text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Title</th>
                            <th className="px-6 py-4 font-semibold">Description</th>
                            <th className="px-6 py-4 font-semibold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((n) => {
                            const isTitleLong = n.title.length > TITLE_LIMIT;
                            const isContentLong = n.content.length > CONTENT_LIMIT;
                            const needsViewBtn = isTitleLong || isContentLong;

                            const title = isTitleLong ? `${n.title.slice(0, TITLE_LIMIT)}...` : n.title;
                            const content = isContentLong ? `${n.content.slice(0, CONTENT_LIMIT)}...` : n.content;

                            return (
                                <tr key={n.id} className="border-b border-border last:border-0 hover:bg-bg/20">
                                    <td className="px-6 py-4">
                                        {searchQuery
                                            ? <SearchTextHighlight text={title} query={searchQuery} />
                                            : title
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {searchQuery
                                            ? <SearchTextHighlight text={content} query={searchQuery} />
                                            : content
                                        }
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        {needsViewBtn && (
                                            <Button variant="ghost">View</Button>
                                        )}
                                        <Button variant="primary" onClick={() => updateNote(n)}>Edit</Button>
                                        <Button variant="danger" onClick={() => deleteNote(n.id)}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

