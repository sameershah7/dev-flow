import { create } from "zustand";
import {
    fetchUser,
    fetchRepos,
    fetchContributions,
} from "../services/githubServices";

type GithubState = {
    user: object;
    repos: object[];
    contributions: number;

    loading: {
        user: boolean;
        repos: boolean;
        contributions: boolean;
    };

    error: string | null;

    loadGithubData: (username: string) => Promise<void>;
};

export const useGithubStore = create<GithubState>((set) => ({
    user: null,
    repos: [],
    contributions: null,

    loading: {
        user: false,
        repos: false,
        contributions: false,
    },

    error: null,

    loadGithubData: async (username: string) => {
        try {
            set({
                loading: { user: true, repos: true, contributions: true },
                error: null,
            });

            const [user, repos, contributions] = await Promise.all([
                fetchUser(username),
                fetchRepos(username),
                fetchContributions(username),
            ]);

            set({
                user,
                repos,
                contributions, loading: {
                    user: false,
                    repos: false,
                    contributions: false,
                },
            });
        } catch (err: any) {
            set({
                error: err.message,
                loading: {
                    user: false,
                    repos: false,
                    contributions: false,
                },
            });
        }
    },
}));

