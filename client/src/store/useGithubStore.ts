import { create } from "zustand";
import {
    fetchUser,
    fetchRepos,
    fetchContributions,
} from "../services/githubServices";

export type GithubUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
}

export type GithubRepo = {
    id: number,
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
};

export type GithubContributions = {
    total: {
        [year: string]: number;
    };
    contributions: Array<{
        data: string;
        count: number;
    }>
}

type GithubState = {
    user: GithubUser | null;
    repos: GithubRepo[];
    contributions: GithubContributions | null;

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
                contributions,
                loading: {
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

