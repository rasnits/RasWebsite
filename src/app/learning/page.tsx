"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resources = [
  {
    title: "📚 Courses & Curricula",
    items: [
      {
        title: "Princeton University: Introduction to Robotics",
        desc: "Kickstart your robotics journey! This awesome course breaks down complex topics like motion planning, feedback control, and computer vision into easy-to-digest concepts.",
        link: "https://irom-lab.princeton.edu/intro-to-robotics/",
        image: "/images/learning/princeton-robotics.jpg",
      },
      {
        title: "MIT 16.485: Visual Navigation",
        desc: "Ready to build autonomous drones? Dive deep into the math and algorithms behind visual navigation, geometry, and optimization with MIT.",
        link: "https://vnav.mit.edu/",
        image: "/images/learning/mit-visual-navigation.jpg",
      },
      {
        title: "Michigan Robotics Online Courses",
        desc: "A treasure trove of free lecture videos and projects from UM! Master the basics of AI, Robot Operating Systems (ROS), and computational algebra.",
        link: "https://robotics.umich.edu/academics/courses/online-courses/",
        image: "/images/learning/michigan-robotics.jpg",
      },
      {
        title: "Modern Robotics: Mechanics, Planning, and Control",
        desc: "The ultimate resource hub! Grab free access to one of the most famous robotics textbooks, complete with video lectures and simulation tools.",
        link: "https://hades.mech.northwestern.edu/index.php/Modern_Robotics",
        image: "/images/learning/modern-robotics.jpg",
      },
      {
        title: "Underactuated Robotics (MIT)",
        desc: "Ever wonder how robots run, swim, or fly? These interactive notes explore nonlinear dynamics and control algorithms for super complex robots.",
        link: "https://underactuated.csail.mit.edu/",
        image: "/images/learning/underactuated-robotics.jpg",
      },
      {
        title: "Robotic Manipulation (MIT)",
        desc: "Get hands-on with open-world manipulation! This textbook and course cover everything you need to know about perception and planning.",
        link: "https://manipulation.mit.edu/intro.html#section1",
        image: "/images/learning/robotic-manipulation.jpg",
      },
    ],
  },
  {
    title: "💻 Open-Source & Resource Hubs",
    items: [
      {
        title: "reBot-DevArm",
        desc: "Build your own robotic arm! This 100% open-source project gives you everything—from 3D printing blueprints to Python SDKs and ROS integration.",
        link: "https://github.com/Seeed-Projects/reBot-DevArm",
        image: "/images/learning/rebot-devarm.jpg",
      },
      {
        title: "Awesome Robotics",
        desc: "Looking for tools? This massive, community-driven collection has the best simulators, libraries, and coursework all in one place.",
        link: "https://github.com/kiloreux/awesome-robotics",
        image: "/images/learning/awesome-robotics.jpg",
      },
      {
        title: "Ultimate Robotics Resources Library",
        desc: "A massive index perfect for students of all levels! Find open-source rovers, ROS crash courses, and top-tier machine learning guides.",
        link: "https://github.com/akshetP/robotics-resources",
        image: "/images/learning/robotics-library.jpg",
      },
      {
        title: "Claude Code Paper Proofreading",
        desc: "Writing a research paper? Use these brilliant AI prompts to audit your LaTeX code and proofread your ICRA/IROS papers before submission.",
        link: "https://github.com/LimHyungTae/awesome-claudecode-paper-proofreading",
        image: "/images/learning/paper-proofreading.jpg",
      },
      {
        title: "Building Your First Robot in Isaac Sim",
        desc: "Learn from NVIDIA! A super fun, hands-on module for assembling and simulating your very first robot within the powerful Isaac Sim environment.",
        link: "https://docs.nvidia.com/learning/physical-ai/getting-started-with-isaac-sim/latest/building-your-first-robot-in-isaac-sim/index.html",
        image: "/images/learning/isaac-sim.jpg",
      },
    ],
  },
  {
    title: "📰 Industry Insights & News",
    items: [
      {
        title: "McKinsey: Humanoid Supply Chain",
        desc: "What's the business behind robotics? Read this strategic breakdown of the costs, components, and future of humanoid robots.",
        link: "https://www.mckinsey.com/industries/industrials/our-insights/turning-humanoid-supply-chain-constraints-into-billion-dollar-wins",
        image: "/images/learning/mckinsey-humanoid.jpg",
      },
      {
        title: "LeRobot Humanoid by Hugging Face",
        desc: "Hugging Face just released a $2,500 open-source humanoid! Learn how they built it from hardware assembly to real-world AI training.",
        link: "https://huggingface.co/blog/VirgileBatto/lerobot-humanoid",
        image: "/images/learning/lerobot.jpg",
      },
      {
        title: "Boston Dynamics: Training a Humanoid",
        desc: "Go behind the scenes! See how the incredible engineers at Boston Dynamics use reinforcement learning to train the Atlas robot.",
        link: "https://bostondynamics.com/blog/training-a-humanoid-robot-for-hard-work/",
        image: "/images/learning/boston-dynamics.jpg",
      },
      {
        title: "From Pixels to Fields",
        desc: "See how AI is changing farming. This blog explores how generalized AI models are replacing traditional code in huge agricultural robots.",
        link: "https://bonsairobotics.ai/blog/from-pixels-to-fields-foundation-models-are-rewriting-agriculture/",
        image: "/images/learning/bonsai-robotics.jpg",
      },
    ],
  },
  {
    title: "🛠️ Research & Innovation",
    items: [
      {
        title: "Robotic ‘Matter’ Flows Through Intelligence",
        desc: "Mind-blowing research! Check out how simple robotic modules can swarm, self-organize, and flow just like soft matter.",
        link: "https://news.cornell.edu/stories/2026/05/robotic-matter-flows-adapts-through-mechanical-intelligence",
        image: "/images/learning/robotic-matter.jpg",
      },
      {
        title: "SLAM for Dummies",
        desc: "Don't let the math scare you. This classic, super approachable tutorial breaks down localization and mapping into concepts anyone can understand.",
        link: "https://dspace.mit.edu/bitstream/handle/1721.1/119149/16-412j-spring-2005/contents/projects/1aslam_blas_repo.pdf",
        image: "/images/learning/slam.jpg",
      },
      {
        title: "eFlesh: Magnetic Touch Sensing",
        desc: "Give your robots a sense of touch! Grab the open-source designs to 3D-print your own low-cost tactile sensors.",
        link: "https://e-flesh.com/",
        image: "/images/learning/e-flesh.jpg",
      },
    ],
  },
];

export default function LearningPage() {
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

      <main className="flex-grow flex items-center justify-center px-4 md:px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#A35928]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#700B4F]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#006699]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center mb-16 relative z-10">
            <motion.h1
              {...fadeIn}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6 text-center"
            >
              Learning <br />
              <span className="text-white/40">Resource Hub</span>
            </motion.h1>
            <motion.p {...fadeIn} className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Explore an extensive collection of academic courses, open-source projects, global technical libraries, and industry insights curated for IEEE RAS NIT Silchar members.
            </motion.p>
          </div>

          {/* Featured Section */}
          <motion.div {...fadeIn} className="bg-black/20 border border-[#00A8E8]/30 rounded-2xl mb-16 backdrop-blur-md relative z-10 flex flex-col md:flex-row overflow-hidden shadow-2xl">
            {/* Left: Featured Image */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-black/40 shrink-0">
              <img 
                src="/images/learning/ras-university.jpg"
                alt="RAS University" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Right: Info details */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-left">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#00A8E8] mb-4">
                Featured Global Resource
              </h3>
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight">
                RAS University
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                Ready to take the next step? Explore the official, expansive global technical library and educational modules provided by the parent society.
              </p>
              <div>
                <Link
                  href="https://www.ieee-ras.org/ras-university/"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#006699] hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(0,168,232,0.3)] hover:shadow-[0_0_30px_rgba(0,102,153,0.6)]"
                >
                  Visit RAS University
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Resource Grid */}
          <div className="space-y-16 relative z-10 text-left">
            {resources.map((category, idx) => (
              <motion.section key={idx} {...fadeIn}>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-wide mb-8 border-b border-white/10 pb-4 text-[#FF9A5C]">
                  {category.title}
                </h2>
                <div className="flex flex-col space-y-8">
                  {category.items.map((item, i) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={i}
                      className="group bg-white/5 border border-white/10 rounded-2xl hover:border-[#006699]/50 hover:bg-white/10 transition-all duration-500 flex flex-col md:flex-row overflow-hidden shadow-lg"
                    >
                      {/* Left: Rendered Link Image */}
                      <div className="w-full md:w-2/5 h-56 md:h-auto relative overflow-hidden bg-black/40 shrink-0">
                        <img 
                          src={item.image}
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                          loading="lazy"
                        />
                        {/* Gradient overlay to blend image nicely with the card content */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                      </div>

                      {/* Right: Info details */}
                      <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#00A8E8] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed flex-grow">
                          {item.desc}
                        </p>
                        <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-[#00A8E8] transition-colors">
                          Explore Resource
                          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
