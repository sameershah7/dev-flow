import { create } from "zustand";

interface Task {
    id: number;
    title: string;
    priority: "high" | "med" | "low";
    done: boolean;
}

type TaskStats = {
    total: number;
    completed: number;
    inProgress: number;
    highPriority: number;
    completionRate: number;
};


type TaskStore = {
    tasks: Task[];

    // actions
    addTask: (title: string, priority: Task["priority"]) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;

    // selectors 
    getPendingTasks: () => Task[];
    getStats: () => TaskStats;

    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
    tasks: [
        { id: 1, title: "Design system audit", priority: "high", done: false },
        { id: 2, title: "User interview prep", priority: "med", done: false },
        { id: 3, title: "Update onboarding flow", priority: "med", done: true },
        { id: 4, title: "Write release notes", priority: "low", done: false },
        { id: 5, title: "Fix nav bar bug", priority: "high", done: true },
        { id: 6, title: "Refactor auth module", priority: "high", done: false },
        { id: 7, title: "Add dark mode support", priority: "med", done: false },
        { id: 8, title: "Write unit tests for API", priority: "low", done: false },
        { id: 9, title: "Deploy staging build", priority: "high", done: true },
        { id: 10, title: "Review pull requests", priority: "med", done: true },
    ],

    addTask: (title, priority) =>
        set((state) => ({
            tasks: [
                {
                    id: Date.now(),
                    title,
                    priority,
                    done: false,
                },
                ...state.tasks,
            ],
        })),

    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        }));
    },

    deleteTask: (id: number) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    },

    getPendingTasks: () => {
        const tasks = get().tasks;
        return tasks.filter(i => !i.done);
    },

    getStats: (): TaskStats => {
        const tasks = get().tasks;
        const totalTask = tasks.length;
        const completed = tasks.filter((t) => t.done).length;

        return {
            total: totalTask,
            completed,
            inProgress: totalTask - completed,
            highPriority: tasks.filter((i) => i.priority === "high" && !i.done).length, completionRate: tasks.length > 0 ? Math.round((completed / totalTask) * 100) : 0,
        };
    },

    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query.replace(/\s+/g, " ") }),

}));
