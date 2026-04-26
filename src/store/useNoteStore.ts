import { create } from "zustand"

export type Note = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
}

type NoteStore = {
    notes: Note[];

    // addNote: () => void;
    // updateNote: () => void;
    // deleteNote: () => void;

    // searchQuery: string;
    // setSearchQuery: () => void;
}

export const useNoteStore = create<NoteStore>((set, get) => ({
    notes: [
        {
            id: 1,
            title: "Project Ideas",
            content: "Build a task manager with notes, dark mode, and search. Maybe add drag and drop later.",
            createdAt: "2026-04-20",
            updatedAt: "2026-04-22",
        },
        {
            id: 2,
            title: "React Tips",
            content: "Use Zustand for global state. Avoid prop drilling. Keep components small and reusable.",
            createdAt: "2026-04-18",
            updatedAt: "2026-04-21",
        },
        {
            id: 3,
            title: "Bugs to Fix",
            content: "Sidebar not closing on mobile. Task toggle not updating UI instantly. Check re-render issues.",
            createdAt: "2026-04-23",
            updatedAt: "2026-04-23",
        },

    ],
}))
