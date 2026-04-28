import { useState } from "react"
import { useNoteStore, type Note } from "../../store/useNoteStore"

import { NotesHeader } from "./components/NotesHeader"
import { NotesGrid } from "./components/NotesGrid"
import { NoteFormModal } from "./components/NoteFormModal"
import { ConfirmationModal } from "../../shared/components/feedback/ConfirmationModal"

export default function NotesPage() {
    const [taskUiActive, setTaskUiActive] = useState<"card" | "table">("card")
    const [isNoteFormModalOpen, setIsNoteFormModalOpen] = useState(false);
    const [selectedUpdateNote, setSelectedUpdateNote] = useState<Note | null>();
    const [deleteNoteId, setDeleteNoteId] = useState<number | null>(null);
    const [showDelete, setShowDelete] = useState(false);

    const { notes, searchQuery, addNote, updateNote, deleteNote } = useNoteStore();

    const handleSaveNote = (data: { title: string, content: string }) => {
        const { title, content } = data;
        setSelectedUpdateNote(null)
        if (!title.trim() || !content.trim()) return;

        if (selectedUpdateNote) {
            updateNote(selectedUpdateNote.id, data)
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
        setSelectedUpdateNote(data)
        setIsNoteFormModalOpen(true)
    }

    const closeNoteFormModal = () => {
        setIsNoteFormModalOpen(false);
        setSelectedUpdateNote(null)
    }
    const handleDelete = () => {
        if (deleteNoteId !== null) {
            deleteNote(deleteNoteId);
        }
        setShowDelete(false);
        setDeleteNoteId(null);
    };



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
                initialData={selectedUpdateNote}
            />}

            <NotesHeader
                currentFilter={taskUiActive}
                onFilter={(filter) => setTaskUiActive(filter)}
                toggleNoteModal={() => setIsNoteFormModalOpen(true)}
            />

            {taskUiActive === "card" &&
                <NotesGrid
                    notes={filterData}
                    updateNote={handleUpdateNote}
                    deltedNote={(id) => {
                        setDeleteNoteId(id);
                        setShowDelete(true)
                    }}
                />
            }
        </>
    )
}
