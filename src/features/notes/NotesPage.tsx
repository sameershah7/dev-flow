import { useState } from "react"
import { useNoteStore, type Note } from "../../store/useNoteStore"

import { NotesHeader } from "./components/NotesHeader"
import { NotesGrid } from "./components/NotesGrid"
import { NoteFormModal } from "./components/NoteFormModal"

export default function NotesPage() {
    const [taskUiActive, setTaskUiActive] = useState<"card" | "table">("card")
    const [isNoteFormModalOpen, setIsNoteFormModalOpen] = useState(false);
    const [selectedUpdateNote, setSelectedUpdateNote] = useState<Note | null>();

    const { notes, searchQuery, addNote, updateNote } = useNoteStore();

    console.log(notes)
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
    return (
        <>
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
                />}
        </>
    )
}
