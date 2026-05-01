import ProfilePic from "../../../assets/vite.svg"
import { BookCopy, FileCode, Users } from "lucide-react"

export function ProfileOverview() {
    const overviewStats = [
        {
            icon: BookCopy,
            title: "Public Repo",
            count: 12,
        }, {
            icon: Users,
            title: "Followers",
            count: 123,
        }, {
            icon: FileCode,
            title: "Public Gists",
            count: 7,
        }
    ]
    return (
        <div className="p-4 bg-bg border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-sm">
            <header className="text-sm font-semibold text-text-main/70 uppercase tracking-wider mb-4">
                Profile Overview
            </header>

            <div className="flex items-center gap-4 mb-3">
                <img
                    src={ProfilePic}
                    alt="ProfilePic"
                    className="w-14 h-14 rounded-full object-cover border-2 border-border shadow-sm"
                />

                <div>
                    <h4 className="font-semibold text-lg leading-tight">
                        Shah_github_007
                    </h4>
                    <p className="text-sm text-text-main/70">
                        Building things with code
                    </p>
                </div>
            </div>
            <div className="h-px bg-border mb-4" />
            <div className="grid grid-cols-3 gap-x-3">
                {overviewStats.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-start p-1 rounded-xl bg-bg/50 hover:bg-bg transition"
                    >
                        <div className="flex items-center gap-2 text-text-main/70 mb-1">
                            <item.icon size={16} />
                            <span className="text-[10px] font-medium uppercase">
                                {item.title}
                            </span>
                        </div>

                        <div className="text-lg mt-auto font-semibold text-text-main">
                            {item.count.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
