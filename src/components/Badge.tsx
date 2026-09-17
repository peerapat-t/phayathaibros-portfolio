import type { ReactNode } from "react";
import type { BadgeIcon } from "../data/types";

const palettes: Record<BadgeIcon, [string, string]> = {
  trophy: ["#fde047", "#f59e0b"],
  medal: ["#7dd3fc", "#6366f1"],
  star: ["#f9a8d4", "#e11d48"],
  course: ["#a3e635", "#059669"],
  listening: ["#c4b5fd", "#7c3aed"],
  chart: ["#67e8f9", "#0284c7"],
  network: ["#fdba74", "#ea580c"],
  sparkle: ["#f0abfc", "#9333ea"],
  code: ["#bef264", "#16a34a"],
  fund: ["#fcd34d", "#0f766e"],
};

const glyphs: Record<BadgeIcon, ReactNode> = {
  trophy: (
    <>
      <path d="M22 16h20v8a10 10 0 0 1-20 0z" />
      <path d="M22 19h-5a5 5 0 0 0 5 7M42 19h5a5 5 0 0 1-5 7" fill="none" />
      <path d="M32 34v6M26 46h12l-2-6h-8z" />
    </>
  ),
  medal: (
    <>
      <path d="M24 14l5 12M40 14l-5 12" fill="none" />
      <circle cx="32" cy="36" r="10" />
      <path d="M32 31l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="white" stroke="none" />
    </>
  ),
  star: <path d="M32 14l5.3 10.8 11.9 1.7-8.6 8.4 2 11.8L32 41.1l-10.6 5.6 2-11.8-8.6-8.4 11.9-1.7z" />,
  course: (
    <>
      <path d="M16 22l16-7 16 7-16 7z" />
      <path d="M22 26v9c0 3 4.5 6 10 6s10-3 10-6v-9" fill="none" />
      <path d="M48 22v10" fill="none" />
    </>
  ),
  listening: (
    <>
      <path d="M18 38V26a14 14 0 0 1 28 0v12" fill="none" />
      <rect x="15" y="34" width="8" height="12" rx="3" />
      <rect x="41" y="34" width="8" height="12" rx="3" />
    </>
  ),
  chart: (
    <>
      <path d="M18 46h28" fill="none" />
      <rect x="20" y="32" width="6" height="10" rx="1" />
      <rect x="29" y="24" width="6" height="18" rx="1" />
      <rect x="38" y="16" width="6" height="26" rx="1" />
    </>
  ),
  network: (
    <>
      <path d="M22 20l10 12M42 20L32 32M32 32v12M22 20h20" fill="none" />
      <circle cx="22" cy="20" r="4" />
      <circle cx="42" cy="20" r="4" />
      <circle cx="32" cy="32" r="4.5" />
      <circle cx="32" cy="46" r="4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M28 16c1.5 8 4 10.5 12 12-8 1.5-10.5 4-12 12-1.5-8-4-10.5-12-12 8-1.5 10.5-4 12-12z" />
      <path d="M44 36c.8 3.5 1.9 4.6 5 5.3-3.1.7-4.2 1.8-5 5.3-.8-3.5-1.9-4.6-5-5.3 3.1-.7 4.2-1.8 5-5.3z" />
    </>
  ),
  code: <path d="M25 22l-9 10 9 10M39 22l9 10-9 10M35 18l-6 28" fill="none" />,
  fund: (
    <>
      <path d="M17 42l9-9 6 5 8-11 7 6" fill="none" />
      <path d="M17 20v28h30" fill="none" />
      <circle cx="47" cy="19" r="5" />
    </>
  ),
};

/** Generated badge artwork for skills, awards and courses (not an official logo). */
export default function Badge({ icon, className = "" }: { icon: BadgeIcon; className?: string }) {
  const [from, to] = palettes[icon];
  const id = `badge-${icon}`;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path d="M32 2l7 5 8.5-.5 3.8 7.7 7.7 3.8L58.5 26 62 32l-3.5 6 .5 8.5-7.7 3.8-3.8 7.7L39 57.5 32 62l-7-4.5-8.5.5-3.8-7.7-7.7-3.8L5.5 38 2 32l3.5-6L5 17.5l7.7-3.8L16.5 6 25 6.5z" fill={`url(#${id})`} />
      <circle cx="32" cy="32" r="22" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      <g fill="white" fillOpacity="0.95" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {glyphs[icon]}
      </g>
    </svg>
  );
}
