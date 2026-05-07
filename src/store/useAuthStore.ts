import { create } from "zustand"

type User = {
    id: number,
    name: string;
};

type AuthState = {
    user: User | null;
    loading: boolean;
    success: boolean;
    message: string,

    login: (credentials: { username: string, password: string }) => Promise<void>;
    signup: (credentials: { username: string; email: string; password: string }) => Promise<void>;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    success: null,
    message: "",

    login: async (credentials) => {
        set({ loading: true, success: null })
        try {
            const storedUserRaw = localStorage.getItem(credentials.username);
            if (storedUserRaw) {
                const existingUser = JSON.parse(storedUserRaw);
                if (existingUser) {
                    if (existingUser.password === credentials.password) {
                        set({
                            user: {
                                id: existingUser.id,
                                name: existingUser.username,
                            }
                        })
                    }
                }
            } else {
                return { success: false, loading: false, message: "Wrong password" }
            }
        }
        catch (error) {
            set({ loading: false, success: false, message: error });
        }
    },

    signup: async (credentials: { username: string; email: string; password: string }) => {
        set({ loading: true, success: null });

        try {
            const newUser = {
                id: Date.now(),
                username: credentials.username,
                email: credentials.email,
                password: credentials.password
            };

            localStorage.setItem(credentials.username, JSON.stringify(newUser));

            set({
                user: {
                    id: newUser.id,
                    name: newUser.username,
                },
                loading: false,
                success: true
            });
        } catch (error) {
            set({ loading: false, success: false, message: error });
        }
    },

    logout: () => {
        set({ user: null })
    }

}))
