import { useState } from "react"
import { useNoteStore } from "../../store/useNoteStore"

import { NotesHeader } from "./components/NotesHeader"
import { NotesGrid } from "./components/NotesGrid"
import { NoteFormModal } from "./components/NoteFormModal"

export default function NotesPage() {
    const [taskUiActive, setTaskUiActive] = useState<"card" | "table">("card")
    const [isNoteFormModalOpen, setIsNoteFormModalOpen] = useState(false);

    const { notes, searchQuery, addNote } = useNoteStore();

    const handleSaveNote = (data: { title: string, content: string }) => {
        const { title, content } = data;
        if (!title.trim() || !content.trim()) return;

        addNote(title, content);
        setIsNoteFormModalOpen(false)
    }

    const filterData = notes
        .filter((n) => {
            const words = (n.title + " " + n.content)
                .toLowerCase()
                .split(/\s+/);

            return words.some(word => word.startsWith(searchQuery));
        })

    return (
        <>
            {isNoteFormModalOpen && <NoteFormModal
                toggleModal={() => setIsNoteFormModalOpen(false)}
                onSave={handleSaveNote}
            />}
            <NotesHeader
                currentFilter={taskUiActive}
                onFilter={(filter) => setTaskUiActive(filter)}
                toggleNoteModal={() => setIsNoteFormModalOpen(true)}
            />
            {taskUiActive === "card" && <NotesGrid notes={filterData} />}
        </>
    )
}
