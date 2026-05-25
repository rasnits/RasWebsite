"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

interface RobotProject {
  name: string;
  description: string;
  image?: string;
}

interface PublishedProject {
  name: string;
  description: string;
  link?: string;
  authors: string;
  pdfPath?: string;
}

const robots: RobotProject[] = projectsData["Robots under IEEE RAS"];
const publications: PublishedProject[] = projectsData["Published projects"];
const iinventixProjects: PublishedProject[] = projectsData["IInvenTix Projects"];

export default function ProjectsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white selection:bg-[#00629B]"
      style={{ background: "linear-gradient(90deg, #A35928 0%, #700B4F 94%)" }}
    >
      <Header />

      <main className="flex-grow mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* HERO */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded border border-[#FFFFFF]/30 bg-[#FFFFFF]/5 px-3 py-1"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFFFFF]">
              Showcase of Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black tracking-tighter md:text-8xl uppercase italic leading-[0.8]"
          >
            PROJECTS <br />
            <span className="text-[#CFC4C5]">AT IEEE RAS</span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-200"
          >
            Explore the cutting-edge robotics and automation projects built by the members of the IEEE RAS Student Branch Chapter at NIT Silchar. From autonomous rovers to high-impact research publications, our community actively engages in pushing the boundaries of technology.
          </motion.p>
        </section>

        {/* ROBOTS UNDER IEEE RAS */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Robots under IEEE RAS
          </motion.h2>

          <div className="grid gap-12">
            {robots.map((robot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#112240]/40 border border-white/5 hover:border-[#00629B]/30 transition-all duration-500 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Photo Container with Padding */}
                  <div className="p-4 md:p-6 w-full md:w-[400px] lg:w-[480px] shrink-0 flex items-center justify-center">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0A192F] border border-white/5 shadow-inner flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      {robot.image ? (
                        <Image
                          src={robot.image}
                          alt={robot.name}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 480px"
                        />
                      ) : (
                        <div className="text-gray-500 text-sm font-mono tracking-widest uppercase">
                          [ Image Protected ]
                        </div>
                      )}
                      {/* High-tech scanline or overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent opacity-60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col justify-center p-8 md:p-10 md:pl-4 border-t md:border-t-0 border-white/5">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#00629B] bg-[#00629B]/10 px-3 py-1.5 rounded-sm">
                        ROBOTICS
                      </span>
                      <div className="h-[1px] flex-grow bg-white/5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-[#00629B] transition-colors leading-none">
                      {robot.name}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl text-justify whitespace-pre-line">
                      {robot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            IInvenTix Projects
          </motion.h2>

          <div className="grid gap-12">
            {iinventixProjects.map((iinventix, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#00629B]/10 border border-[#00629B]/30 hover:border-[#00629B] transition-all duration-500 shadow-2xl p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="flex-1 flex flex-col">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#00629B] mb-2 bg-[#00629B]/20 inline-block px-3 py-1 rounded">
                        Global Showcase Project
                      </span>
                      <h3 className="text-3xl font-black text-white group-hover:text-[#00629B] transition-colors leading-tight mb-6 mt-2">
                        {iinventix.name}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 text-justify whitespace-pre-line">
                        {iinventix.description}
                      </p>

                      <div className="mb-8 p-5 rounded-lg bg-black/30 border border-white/10">
                        <span className="text-xs text-[#00629B] uppercase tracking-widest block mb-2 font-bold">Showcased At</span>
                        <span className="text-base font-medium text-white">{iinventix.authors}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      {iinventix.link && (
                        <Link
                          href={iinventix.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white bg-[#00629B] hover:bg-[#004d7a] px-6 py-3 rounded transition-colors"
                        >
                          View on LinkedIn
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                      {iinventix.pdfPath && (
                        <Link
                          href={iinventix.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#00629B] bg-white hover:bg-gray-200 px-6 py-3 rounded transition-colors"
                        >
                          Open PDF Poster
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* PDF Preview / Graphic Column */}
                  {iinventix.pdfPath && (
                    <div className="lg:w-[400px] shrink-0">
                      <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-white/20 bg-white/5 relative flex items-center justify-center">
                        <iframe 
                          src={`${iinventix.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="absolute inset-0 w-full h-full"
                          title={`${iinventix.name} PDF Poster`}
                        />
                        {/* Fallback overlay incase iframe doesn't load nicely on mobile */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PUBLISHED PROJECTS */}
        <section className="mb-40">
          <motion.h2 {...fadeIn} className="text-[#FFFFFF] font-bold mb-10 uppercase tracking-[0.2em] text-2xl">
            Published Projects
          </motion.h2>

          <div className="grid gap-12">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border-l-4 border-[#00629B]/30 hover:border-[#00629B] transition-all duration-500 shadow-xl p-8 md:p-10"
              >
                <div className="flex flex-col h-full">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#00629B] block mb-2">
                      Research Publication
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00629B] transition-colors leading-tight mb-4">
                      {pub.name}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-justify whitespace-pre-line">
                      {pub.description}
                    </p>
                    <div className="mb-8 p-4 rounded bg-black/20 border border-white/5">
                      <span className="text-xs text-[#00629B] uppercase tracking-widest block mb-1">Published / Presented At</span>
                      <span className="text-sm font-medium text-gray-200">{pub.authors}</span>
                    </div>
                  </div>

                  {pub.link && (
                    <div className="mt-auto">
                      <Link
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#00629B] bg-white hover:bg-gray-200 px-6 py-3 rounded transition-colors"
                      >
                        Read Publication
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
