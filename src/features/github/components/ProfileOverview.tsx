export function ProfileOverview() {
    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm hover:shadow-lg transition w-full">

            <h3 className="text-sm uppercase text-text-main/60 mb-4">
                Profile Overview
            </h3>

            <div className="flex items-center gap-4 mb-5">
                <img
                    src="https://avatars.githubusercontent.com/u/175880165?v=4"
                    className="w-14 h-14 rounded-full border"
                />

                <div>
                    <h4 className="font-semibold text-lg">Sameer Shah</h4>
                    <p className="text-sm text-text-main/70">
                        MERN Stack Developer
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <Stat title="Repos" value="7" />
                <Stat title="Followers" value="2" />
                <Stat title="Gists" value="0" />
            </div>
        </div>
    );
}

function Stat({ title, value }: any) {
    return (
        <div className="p-3 rounded-xl bg-bg/50">
            <p className="text-xs text-text-main/60">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}
