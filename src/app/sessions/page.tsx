import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { sessions } from "@/data/sessions";

export const metadata: Metadata = {
  title: "Sessions — IEEE RAS (Silchar Subsection)",
  description:
    "Previous and upcoming Google Meet and IEEE Distinguished Lecture sessions by IEEE RAS Silchar Subsection.",
};

export default function SessionsPage() {
  const upcoming = sessions.filter((s) => s.isUpcoming);
  const past = sessions.filter((s) => !s.isUpcoming);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#0A192F" }}>
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--ras-blue)]/[0.07] blur-[120px]" />
        <div className="absolute -right-32 top-[60%] h-[400px] w-[400px] rounded-full bg-[var(--ras-gold)]/[0.05] blur-[100px]" />
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial fade so the grid doesn't tile uniformly */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A192F_70%)]" />
      </div>

      <Header />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-24 text-white">
        {/* Hero header */}
        <header className="mb-16 text-center">
          <p className="mb-3 inline-block rounded-full border border-[var(--ras-gold)]/30 bg-[var(--ras-gold)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ras-gold)]">
            IEEE RAS Silchar
          </p>
          <h1 className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Sessions &amp; Distinguished Lectures
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            Explore upcoming Google Meet sessions and IEEE Distinguished
            Lectures, along with recordings and LinkedIn posts from previous
            events.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--ras-gold)]/60 to-transparent" />
        </header>

        {/* Stats strip */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Total Sessions", value: sessions.length, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { label: "Upcoming", value: upcoming.length, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "Completed", value: past.length, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "Platforms", value: [...new Set(sessions.map(s => s.platform))].length, icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[var(--ras-blue)]/10 to-transparent" />
              <svg className="mx-auto mb-2 h-5 w-5 text-[var(--ras-gold)]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-widest text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {upcoming.length > 0 && (
          <section className="mb-16">
            <SectionHeading
              title="Upcoming Sessions"
              subtitle="Live & scheduled events"
              accentColor="text-emerald-400"
              dotColor="bg-emerald-400"
              pulse
            />
            <div className="grid gap-8 md:grid-cols-2">
              {upcoming.map((session) => (
                <SessionCard key={session.id} variant="upcoming" session={session} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <SectionHeading
              title="Previous Sessions"
              subtitle="Recordings & social posts"
              accentColor="text-gray-300"
              dotColor="bg-gray-400"
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {past.map((session) => (
                <SessionCard key={session.id} variant="past" session={session} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

/* ─── Section heading ─── */

function SectionHeading({
  title,
  subtitle,
  accentColor,
  dotColor,
  pulse,
}: {
  title: string;
  subtitle: string;
  accentColor: string;
  dotColor: string;
  pulse?: boolean;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="relative flex h-2.5 w-2.5">
        {pulse && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-75`} />
        )}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dotColor}`} />
      </span>
      <h2 className={`text-xl font-bold tracking-tight ${accentColor} md:text-2xl`}>
        {title}
      </h2>
      <span className="ml-auto hidden text-xs uppercase tracking-[0.2em] text-gray-500 sm:block">
        {subtitle}
      </span>
    </div>
  );
}

/* ─── Countdown helper for upcoming dates ─── */

function DaysAway({ date }: { date: string }) {
  const diff = Math.ceil(
    (new Date(date).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
  if (diff < 0) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-[var(--ras-gold)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--ras-gold)]">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {diff === 0 ? "Today" : diff === 1 ? "Tomorrow" : `${diff} days away`}
    </span>
  );
}

/* ─── Session card ─── */

type SessionVariant = "upcoming" | "past";

type SessionCardProps = {
  session: (typeof sessions)[number];
  variant: SessionVariant;
};

function SessionCard({ session, variant }: SessionCardProps) {
  const isUpcoming = variant === "upcoming";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b from-[#112240] to-[#0b1a30] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${
        isUpcoming
          ? "border-emerald-500/20 hover:border-emerald-500/40"
          : "border-white/[0.07] hover:border-white/15"
      }`}
    >
      {/* Hover glow effect */}
      <div
        className={`pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl ${
          isUpcoming
            ? "bg-gradient-to-br from-emerald-500/[0.15] via-transparent to-emerald-500/[0.05]"
            : "bg-gradient-to-br from-[var(--ras-blue)]/[0.12] via-transparent to-[var(--ras-gold)]/[0.05]"
        }`}
      />
      {/* Top accent line */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] ${
          isUpcoming
            ? "bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            : "bg-gradient-to-r from-transparent via-[var(--ras-blue)] to-transparent"
        }`}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={session.posterImage}
          alt={session.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-black/30 to-transparent" />

        {/* Mode badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${isUpcoming ? "bg-emerald-400" : "bg-[var(--ras-blue)]"}`} />
          {session.mode} · {session.platform}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Date row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <p className="flex items-center gap-1.5 text-xs font-medium text-[var(--ras-gold)]">
              <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {session.date} · {session.time}
            </p>
            {isUpcoming && <DaysAway date={session.date} />}
            {session.location && (
              <p className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {session.location}
              </p>
            )}
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
              isUpcoming
                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
                : "bg-white/5 text-gray-400 ring-1 ring-white/10"
            }`}
          >
            {isUpcoming && <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />}
            {isUpcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        <h3 className="text-base font-bold leading-snug text-white md:text-lg">
          {session.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">
          {session.description}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 pt-1">
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          <span className="text-[10px] uppercase tracking-widest text-gray-600">Links</span>
          <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {session.linkedinUrl && (
            <Link
              href={session.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </Link>
          )}

          {session.meetUrl && (
            <Link
              href={session.meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 no-underline transition-colors hover:bg-emerald-500/20"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {isUpcoming ? "Join Meet" : "Meet link"}
            </Link>
          )}

          {session.youtubeUrl && (
            <Link
              href={session.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-300 no-underline transition-colors hover:bg-red-500/20"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              {isUpcoming ? "Watch Live" : "YouTube"}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

