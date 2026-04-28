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

    addNote: (title: string, content: string) => void;
    updateNote: (id: number, data: { title: string, content: string }) => void;
    deleteNote: (id: number) => void;

    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useNoteStore = create<NoteStore>((set, get) => ({
    notes: [
        {
            id: 1,
            title: "Project Ideas",
            content: "Build a task manager with notes, dark mode, and search. Maybe add drag and drop later.",
            createdAt: "2026-04-20",
            updatedAt: "",
        },
        {
            id: 2,
            title: "React Tips",
            content: "Use Zustand for global state. Avoid prop drilling. Keep components small and reusable.",
            createdAt: "2026-04-18",
            updatedAt: "",
        },
        {
            id: 3,
            title: "Bugs to Fix",
            content: "Sidebar not closing on mobile. Task toggle not updating UI instantly. Check re-render issues.",
            createdAt: "2026-04-23",
            updatedAt: "",
        },
    ],

    addNote: (title: string, content: string) => {
        set((state) => ({
            notes: [
                {
                    id: Date.now(),
                    title: title,
                    content: content,
                    createdAt: new Date().toISOString().split('T')[0],
                    updatedAt: "",
                },
                ...state.notes
            ],
        }))
    },

    updateNote: (id: number, data: { title: string, content: string }) => {
        set((state) => ({
            notes: state.notes.map((n) =>
                n.id === id ? {
                    ...n,
                    title: data.title,
                    content: data.content,
                    updatedAt: new Date().toISOString().split('T')[0],
                } : n,
            )
        }))

    },

    deleteNote: (id: number) => {
        set((state) => ({
            notes: state.notes.filter((n) => n.id !== id)
        }))
    },

    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query.replace(/\s+/g, " ") }),

}))
