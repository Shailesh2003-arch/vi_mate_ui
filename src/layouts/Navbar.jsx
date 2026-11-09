import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Monitor,
  ChevronDown,
  Palette,
} from "lucide-react";
import {useCurrentUser} from "../hooks/useCurrentUser.js";
import {useLogout} from "../hooks/useLogout.js";


export default function Navbar() {
  const { data: user, isLoading, isError } = useCurrentUser();
  const { mutate: logout, isPending } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [theme, setTheme] = useState("Dark");

  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4">

      {/* Logo */}
      <h1 className="font-bold text-xl text-white">
        ViMate
      </h1>

      {/* Profile Dropdown */}
      <div className="relative">

       <button
  onClick={() => setIsOpen(!isOpen)}
  className="flex items-center gap-2 rounded-full p-1.5 hover:bg-zinc-800 transition cursor-pointer"
>
  {user?.avatar ? (
    <img
      src={user.avatar.url}
      alt="Profile"
      className="h-8 w-8 rounded-full object-cover"
    />
  ) : (
    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
      {user?.name?.charAt(0).toUpperCase() || "U"}
    </div>
  )}

  <ChevronDown size={16} className="text-zinc-400" />
</button>

        {isOpen && (
          <div className="absolute right-0 top-12 w-56 rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl py-2 z-50">

            {/* Profile */}
            <div className="px-4 py-3 border-b border-zinc-800">
  <p className="text-sm font-semibold text-white">
    {user?.username || "User"}
  </p>

  <p className="text-xs text-zinc-400 truncate">
    {user?.email}
  </p>
</div>

            {/* Appearance */}
            <div className="relative">
              <button
                onClick={() => setShowAppearance(!showAppearance)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <Palette size={17} />
                  Appearance
                </span>
                <ChevronDown size={14} />
              </button>

              {showAppearance && (
                <div className="px-3 py-1 bg-zinc-950">
                  {[
                    { name: "Light", icon: Sun },
                    { name: "Dark", icon: Moon },
                    { name: "System", icon: Monitor },
                  ].map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      onClick={() => setTheme(name)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer ${
                        theme === name
                          ? "text-white bg-zinc-800"
                          : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                      }`}
                    >
                      <Icon size={16} />
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Settings */}
            <button
              onClick={() => {
                setIsOpen(false);
                // Navigate to Settings
              }}
              className="w-full cursor-pointer flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800"
            >
              <Settings size={17} />
              Settings
            </button>

            <div className="my-2 border-t border-zinc-800" />

            {/* Logout */}
            <button
  onClick={() => {
    logout();
    setIsOpen(false);
  }}
  disabled={isPending}
  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 disabled:opacity-50 cursor-pointer"
>
  <LogOut size={17} />

  {isPending ? "Logging out..." : "Log Out"}
</button>

          </div>
        )}
      </div>
    </header>
  );
}

