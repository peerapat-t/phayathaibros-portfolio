import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <div className="font-display text-8xl font-bold text-accent">404</div>
      <p className="mt-4 text-zinc-400">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 rounded-full border border-zinc-700 px-6 py-2.5 text-sm hover:border-zinc-400">
        Back to home
      </Link>
    </div>
  );
}
