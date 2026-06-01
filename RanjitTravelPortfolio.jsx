import { useEffect } from "react";

export default function RanjitTravelPortfolio() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (!entry.target.classList.contains("keep-visible")) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const heroImages = [
    {
      src: "./hero-photo-1.jpg",
      alt: "Kashi Vishwanath Dham entrance at night",
    },
    {
      src: "./hero-photo-2.jpg",
      alt: "Festive Varanasi riverside celebration",
    },
    {
      src: "./hero-photo-3.jpg",
      alt: "Varanasi ghat walkway and river view",
    },
  ];

  const projects = [
    {
      title: "Travel Stories",
      desc: "Capturing the spiritual beauty of Varanasi ghats through cinematic storytelling and creative visuals.",
      icon: "Travel",
      bg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.92)),url('https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center",
    },
    {
      title: "Travel & Coding Blog",
      desc: "Combining technology, creativity, and travel experiences into beautiful digital experiences.",
      icon: "Code",
      bg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.92)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center",
    },
    {
      title: "Automation Projects",
      desc: "Building smart automation tools and modern coding solutions with clean UI design.",
      icon: "Flow",
      bg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.92)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center",
    },
  ];

  const skills = [
    {
      name: "C++",
      icon: "https://skillicons.dev/icons?i=cpp",
    },
    {
      name: "Python",
      icon: "https://skillicons.dev/icons?i=python",
    },
    {
      name: "Automation",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Travel Content",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f8.svg",
    },
    {
      name: "UI Design",
      icon: "https://skillicons.dev/icons?i=figma",
    },
  ];

  const instagramUrl =
    "https://www.instagram.com/ranjit_kumar_90?igsh=OGJxdzQ1Znc0MWdv";
  const emailAddress = "kumrr2141@gmail.com";
  const whatsappUrl = "https://wa.me/9190000000000";

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e7] text-stone-900">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(44px) scale(0.98);
          transition: opacity 700ms ease, transform 700ms ease;
          will-change: opacity, transform;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .reveal-delay-1 {
          transition-delay: 120ms;
        }

        .reveal-delay-2 {
          transition-delay: 240ms;
        }

        .reveal-delay-3 {
          transition-delay: 360ms;
        }
      `}</style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(to_bottom,_#fff8ef,_#f6f6f0_45%,_#ebf6fb)]" />

      <div className="relative z-10">
        <nav className="reveal is-visible flex items-center justify-between px-6 py-6 lg:px-20">
          <div className="flex items-center gap-4">
            <img
              src="./logo-photo-new.png"
              alt="Ranjit Kumar logo"
              className="h-20 w-20 rounded-full border-4 border-white object-cover object-[center_18%] shadow-lg ring-4 ring-orange-400/70 scale-[1.16]"
            />

            <div>
              <p className="text-xl font-black uppercase tracking-[0.2em] text-orange-600">
                Ranjit Kumar
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Traveler x Coder
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#about"
              className="rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href={instagramUrl}
            aria-label="Open Instagram profile"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-300 bg-white/80 text-orange-600 shadow-sm transition hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
            </svg>
          </a>
        </nav>

        <section className="grid items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-20 lg:py-24">
          <div className="reveal is-visible">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-orange-500">
              Traveler • Developer • Explorer
            </p>

            <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              JOURNEYS
              <span className="mt-2 block bg-gradient-to-r from-orange-500 via-amber-400 to-sky-500 bg-clip-text text-transparent">
                INTO CODE
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
              I am a student, traveler, and creative builder who finds stories in
              every journey. From the soulful ghats of Varanasi to new places that
              spark inspiration, I turn experiences into meaningful digital ideas
              through code, design, and curiosity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
              >
                Explore Journey
              </a>

              <a
                href={instagramUrl}
                className="rounded-2xl border border-orange-400 px-7 py-3 font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="reveal is-visible relative reveal-delay-1">
            <div className="absolute inset-4 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 shadow-2xl">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`h-[520px] w-full object-cover ${
                    index === 0 ? "block" : "hidden"
                  }`}
                />
              ))}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/75 via-stone-900/10 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-orange-200">
                  Featured Destination
                </p>
                <p className="mt-2 text-2xl font-bold">Varanasi</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-16 lg:px-20">
          <div className="reveal rounded-[2rem] border border-orange-100 bg-white/70 p-10 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-3xl font-bold text-orange-500">ABOUT ME</h2>

            <p className="max-w-4xl text-lg leading-relaxed text-stone-700">
              I am passionate about coding, travel storytelling, photography-inspired
              design, and building aesthetic digital experiences. My inspiration
              comes from the calm mornings of Varanasi ghats and the peaceful
              mountain views of Darjeeling.
            </p>
          </div>
        </section>

        <section id="skills" className="px-6 py-16 lg:px-20">
          <div className="reveal mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold text-orange-500">SKILLS</h2>
            <p className="max-w-md text-sm uppercase tracking-[0.3em] text-stone-500">
              Creative development with a traveler&apos;s eye
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`reveal rounded-2xl border border-orange-100 bg-white/75 p-6 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  skill.name === "Python"
                    ? "reveal-delay-1"
                    : skill.name === "Automation"
                      ? "reveal-delay-2"
                      : skill.name === "Travel Content"
                        ? "reveal-delay-3"
                        : ""
                }`}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 shadow-sm ring-1 ring-orange-200">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="px-6 py-20 lg:px-20">
          <div className="reveal mb-10 flex items-center justify-between gap-6">
            <h2 className="text-3xl font-bold text-orange-500">PROJECTS</h2>

            <span className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Travel & Coding
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`reveal rounded-[2rem] border border-orange-100 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  project.title === "Travel & Coding Blog"
                    ? "reveal-delay-1"
                    : project.title === "Automation Projects"
                      ? "reveal-delay-2"
                      : ""
                } ${project.bg}`}
              >
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
                  {project.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

                <p className="leading-relaxed text-stone-600">{project.desc}</p>

                <a
                  href="#contact"
                  className="mt-6 inline-block text-orange-500 transition hover:translate-x-2"
                >
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-8 lg:px-20">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={instagramUrl}
              className="reveal rounded-[1.5rem] border border-orange-100 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Social
              </p>
              <h3 className="mt-2 text-xl font-bold text-orange-600">Instagram</h3>
              <p className="mt-2 text-stone-600">
                Open my travel reels, stories, and latest visuals.
              </p>
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="reveal reveal-delay-1 rounded-[1.5rem] border border-orange-100 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M3 6.75h18v10.5H3z" />
                  <path d="m4 8 8 6 8-6" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Contact
              </p>
              <h3 className="mt-2 text-xl font-bold text-orange-600">Email Me</h3>
              <p className="mt-2 text-stone-600">
                For collaborations, freelance work, and creative projects.
              </p>
            </a>

            <a
              href={whatsappUrl}
              className="reveal reveal-delay-2 rounded-[1.5rem] border border-orange-100 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.6 2 2.2 6.3 2.2 11.62c0 1.86.55 3.68 1.58 5.24L2 22l5.33-1.73a10.02 10.02 0 0 0 4.71 1.18h.01c5.43 0 9.84-4.31 9.84-9.63C21.89 6.3 17.47 2 12.04 2Zm0 17.68h-.01a8.31 8.31 0 0 1-4.23-1.15l-.3-.18-3.16 1.03 1.03-3.05-.2-.31a7.83 7.83 0 0 1-1.28-4.4c0-4.34 3.63-7.87 8.12-7.87 4.48 0 8.11 3.53 8.11 7.87 0 4.35-3.63 7.88-8.08 7.88Zm4.45-5.94c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.92-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.1-.48.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.75-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.67 4.13 3.64.58.24 1.03.38 1.38.48.58.18 1.1.16 1.52.1.46-.06 1.4-.56 1.6-1.1.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Quick Chat
              </p>
              <h3 className="mt-2 text-xl font-bold text-orange-600">WhatsApp</h3>
              <p className="mt-2 text-stone-600">
                Start a fast conversation for travel or coding ideas.
              </p>
            </a>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 lg:px-20">
          <div className="reveal rounded-[2rem] border border-orange-100 bg-white/70 p-12 text-center shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-4xl font-bold text-orange-500">
              LET&apos;S EXPLORE & CREATE
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-stone-600">
              Open for creative travel collaborations, coding projects, aesthetic
              storytelling, and modern digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={instagramUrl}
                className="inline-block rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
              >
                Follow on Instagram
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-block rounded-2xl border border-orange-400 px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>

        <footer className="reveal px-6 py-8 text-center text-sm text-stone-500">
          © 2026 Ranjit Kumar • Travel x Coding Portfolio
        </footer>
      </div>
    </div>
  );
}
