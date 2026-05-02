export const fetchUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("Faild to fetch User")
    return res.json();
}

export const fetchRepos = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!res.ok) throw new Error("Failed to fetch repos");
    return res.json();
};

export const fetchContributions = async (username: string) => {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    if (!res.ok) throw new Error("Failed to fetch contributions");
    return res.json();
};
