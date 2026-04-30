import { useState } from "react"
import { useNoteStore, type Note } from "../../store/useNoteStore"

import { NotesHeader } from "./components/NotesHeader"
import { NotesGrid } from "./components/NotesGrid"
import { NoteFormModal } from "./components/NoteFormModal"
import { ConfirmationModal } from "../../shared/components/feedback/ConfirmationModal"
import { NoteTable } from "./components/NodeTable"
import { ViewMore } from "../../shared/components/ui/ViewMore"

export default function NotesPage() {
    const [taskUiActive, setTaskUiActive] = useState<"card" | "table">("card")
    const [isNoteFormModalOpen, setIsNoteFormModalOpen] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [isViewMore, setIsViewMore] = useState(false)

    const [selectedNote, setSelectedNote] = useState<Note | null>();
    const [deleteNoteId, setDeleteNoteId] = useState<number | null>(null);

    const { notes, searchQuery, addNote, updateNote, deleteNote } = useNoteStore();

    const handleSaveNote = (data: { title: string, content: string }) => {
        const { title, content } = data;
        setSelectedNote(null)
        if (!title.trim() || !content.trim()) return;

        if (selectedNote) {
            updateNote(selectedNote.id, data)
            return
        }
        addNote(title, content);
        closeNoteFormModal();
    }

    const filterData = notes
        .filter((n) => {
            const words = (n.title + " " + n.content)
                .toLowerCase()
                .split(/\s+/);

            return words.some(word => word.startsWith(searchQuery));
        })

    const handleUpdateNote = (data: Note) => {
        setSelectedNote(data)
        setIsNoteFormModalOpen(true)
    }

    const closeNoteFormModal = () => {
        setIsNoteFormModalOpen(false);
        setSelectedNote(null)
    }

    const setDeleteNote = (id: number) => {
        setDeleteNoteId(id)
        setShowDelete(true)
    }

    const handleDelete = () => {
        if (deleteNoteId !== null) {
            deleteNote(deleteNoteId);
        }
        setShowDelete(false);
        setDeleteNoteId(null);
    };

    const handleViewMore = (data?: Note) => {
        if (!isViewMore) {
            setSelectedNote(data)
            setIsViewMore(true)
        }
        else {
            setIsViewMore(false)
            setSelectedNote(null);
        }
    }

    return (
        <>
            {showDelete &&
                <ConfirmationModal
                    isOpen={showDelete}
                    title="Delete Note?"
                    description="This will permanently erase your note. You can't undo this."
                    confirmLabel="Delete Note"
                    variant="danger"
                    onClose={() => setShowDelete(false)}
                    onConfirm={handleDelete}
                />
            }

            {isNoteFormModalOpen && <NoteFormModal
                toggleModal={closeNoteFormModal}
                onSave={handleSaveNote}
                initialData={selectedNote}
            />
            }

            <NotesHeader
                currentFilter={taskUiActive}
                onFilter={(filter) => setTaskUiActive(filter)}
                toggleNoteModal={() => setIsNoteFormModalOpen(true)}
            />

            {isViewMore
                ? <ViewMore
                    data={selectedNote}
                    handleBack={handleViewMore}
                    onUpdate={handleUpdateNote}
                />
                : taskUiActive === "card"
                    ? <NotesGrid
                        notes={filterData}
                        updateNote={handleUpdateNote}
                        deleteNote={setDeleteNote}
                    />
                    : <NoteTable
                        notes={filterData}
                        updateNote={handleUpdateNote}
                        deleteNote={setDeleteNote}
                        viewMore={handleViewMore}
                    />
            }

        </>
    )
}
