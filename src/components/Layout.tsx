import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
  { to: "/", label: "Top Projects", end: true },
  { to: "/projects", label: "Browse", end: false },
  { to: "/about", label: "About", end: false },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
    }`;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-zinc-950">P</span>
            <span>{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-800 sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-zinc-800 px-5 py-3 sm:hidden">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name} · Built with React, TypeScript & Tailwind CSS</p>
          <div className="flex gap-5">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-zinc-100">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
