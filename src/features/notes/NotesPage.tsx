import { useState } from "react"
import { useNoteStore } from "../../store/useNoteStore"

import { NotesHeader } from "./components/NotesHeader"
import { NotesGrid } from "./components/NotesGrid"

export default function NotesPage() {
    const [taskUiActive, setTaskUiActive] = useState<"card" | "table">("card")

    const { notes } = useNoteStore();

    return (
        <>
            <NotesHeader
                currentFilter={taskUiActive}
                onFilter={(filter) => setTaskUiActive(filter)}
            />
            {taskUiActive === "card" && <NotesGrid notes={notes} />}
        </>
    )
}
