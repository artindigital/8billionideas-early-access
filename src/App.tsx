import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from "@/components/ui/hero-section-shadcnui";
import { CTASection } from "@/components/ui/hero-dithering-card";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Rocket,
  Dice5,
  Coins,
  ChevronDown,
  ShieldCheck,
  Users,
  GraduationCap,
  Award,
  PlayCircle,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const TYPEFORM_URL = "https://8billionideas.typeform.com/to/Ue4NLuLs";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans selection:bg-brand-100 selection:text-brand-900 overflow-hidden text-gray-600">
      {/* Navigation / Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-7xl bg-white rounded-[16px] shadow-sm">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="8billionideas logo" className="h-8 w-auto" />
          </div>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-colors shadow-sm"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-gray-900">
          <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden">
            <video
              src="/background.mp4"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none" />

          <div className="relative z-20 w-full">
            <HeroSection />
          </div>
        </section>

        {/* 1.5. VIDEO SECTION */}
        <section className="px-6 relative z-30 -mt-24 md:-mt-40 mb-24">
          <div className="max-w-5xl mx-auto mt-[60px]">
            <FadeIn>
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes glow-pulse {
                  0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(168, 85, 247, 0.2); }
                  50% { box-shadow: 0 0 25px rgba(168, 85, 247, 0.6), 0 0 50px rgba(168, 85, 247, 0.3); }
                }
                .video-glow {
                  animation: glow-pulse 3s ease-in-out infinite;
                }
              `}} />
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gray-900 border-2 border-purple-500 backdrop-blur-sm video-glow">
                <video
                  src="/video1.MOV"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
              <div className="text-center max-w-4xl mx-auto px-4 pt-8">
                <p className="text-xl md:text-2xl font-sans text-gray-600 leading-relaxed font-medium">
                  These courses don't replace school. They fill the gap school has always left: the real-world skills your child actually needs to thrive.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. THE SOLUTION SECTION */}
        <section className="py-24 px-6 relative">
          <div className="max-w-[82.5rem] mx-auto">
            <FadeIn>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-6">
                  One award-winning course for each stage of the journey
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Mission Hide & Seek",
                  icon: <Coins className="w-6 h-6 text-brand-600" />,
                  desc: "An adventure-style course that teaches young children the fundamentals of financial literacy and personal safety — in the most playful, age-appropriate way possible. Through games, stories, and missions, children learn why keeping things safe matters, both in the real world and online.",
                  tag: "Ages 7-10 • Finance",
                  price: "50 AED",
                  accredited: false,
                  img: "/mission.png"
                },
                {
                  title: "Across the Board",
                  icon: <Dice5 className="w-6 h-6 text-brand-600" />,
                  desc: "What if your child could learn entrepreneurship by actually building something? In Across the Board, kids design, prototype, and pitch their own board game — going through every stage of a real product launch in a way that's exciting, creative, and deeply educational",
                  tag: "Ages 10-13 • Entrepreneurship",
                  price: "50 AED",
                  accredited: false,
                  img: "/healthy.png"
                },
                {
                  title: "Startup School",
                  icon: <Rocket className="w-6 h-6 text-brand-600" />,
                  desc: "The speedrun approach to building a startup. Students go from blank page to a launched concept in one accelerated course — covering ideation, validation, branding, and pitching. It's intense, it's real, and it's the kind of experience that changes how a young person sees the world.",
                  tag: "Ages 14-16 • Entrepreneurship",
                  price: "250 AED",
                  accredited: true,
                  img: "/startup.png"
                },
                {
                  title: "The Internship",
                  icon: <Briefcase className="w-6 h-6 text-brand-600" />,
                  desc: "A fully virtual work experience that puts students inside the different departments of a real company — marketing, operations, finance, product, and more. They work on real briefs, build portfolio pieces, and leave with a professional body of work they can actually show to universities and employers.",
                  tag: "Ages 16-18 • Careers",
                  price: "250 AED",
                  accredited: true,
                  img: "/internship.png"
                }
              ].map((prog, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative bg-gray-100">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (prog.title === "Mission Hide & Seek" && !target.src.includes('unsplash')) {
                            target.src = "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop";
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {prog.accredited && (
                        <span className="absolute bottom-3 right-3 z-10 inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-blue-700 shadow-sm">
                          <Award className="w-3.5 h-3.5 mr-1.5" />
                          Accredited
                        </span>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                          {prog.icon}
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                          {prog.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{prog.title}</h3>
                      <p className="text-gray-500 leading-relaxed flex-grow mb-6">{prog.desc}</p>
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-lg font-display font-bold text-gray-900">{prog.price}</p>
                      </div>
                      <a
                        href={TYPEFORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group/cta"
                      >
                        Get access now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 2.5 BUILT DIFFERENTLY */}
        <section className="py-24 px-6 bg-white border-t border-gray-200 relative overflow-hidden">
          {/* Decorative element - left */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -left-10 top-1/3 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
                  Built differently, on purpose
                </h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { emoji: "🛠️", title: "Project-based, not passive", desc: "Every course is built around doing, not only watching. Children leave with something real: a game they built, a startup they launched, a portfolio they own." },
                { emoji: "📐", title: "Perfectly age-matched", desc: "Each course is built specifically for its Key Stage. The content, language, and activities are precisely calibrated for where your child is, developmentally and cognitively." },
                { emoji: "🎓", title: "Accreditation that counts", desc: "For KS3 and KS4, optional formal accreditation is available for just £7.50 extra. A credential they can put on CVs, personal statements, and university applications." },
                { emoji: "⏱️", title: "Fits around disruption", desc: "Whether school is in session, delayed, or uncertain, these courses are flexible enough to work around your family's reality, not against it." },
                { emoji: "💬", title: "Conversations worth having", desc: "Parents regularly tell us their children come home and talk about what they're learning. These courses spark the kind of thinking that carries on well beyond the screen." }
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHAT YOUR CHILD WILL GAIN SECTION */}
        <section className="py-24 px-6 bg-white border-b border-gray-200 relative overflow-hidden">
          {/* Decorative element - right */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -right-10 bottom-1/4 w-56 h-56 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn className="order-2 lg:order-1">
                <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-brand-100 rounded-3xl transform -rotate-3" />
                  <img
                    src="https://images.unsplash.com/photo-1758612898304-1a6bb546ac44?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Student learning"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-6">
                  What will your child get
                </h2>

                <ul className="space-y-5 mb-10">
                  {[
                    "Access to 6 learning videos + learning resources",
                    "Real-world skills not taught in school",
                    "Structure and direction during online learning",
                    "Practical challenges and guided learning",
                    "More confidence about the future",
                    "Optional recognised NCON certification"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={TYPEFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-colors shadow-sm"
                >
                  Choose Your Programme
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. TRUST / CREDIBILITY SECTION */}
        <section className="py-16 border-b border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight">
                  Trusted by schools, built for real life
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <GraduationCap className="w-8 h-8 text-brand-600 mb-2" />
                <div className="text-2xl font-display font-bold text-gray-900">350+</div>
                <div className="text-sm text-gray-500">Schools Delivered In</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Users className="w-8 h-8 text-brand-600 mb-2" />
                <div className="text-2xl font-display font-bold text-gray-900">1 Million+</div>
                <div className="text-sm text-gray-500">Students Reached</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <ShieldCheck className="w-8 h-8 text-brand-600 mb-2" />
                <div className="text-2xl font-display font-bold text-gray-900">Expert</div>
                <div className="text-sm text-gray-500">Educators & Facilitators</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Award className="w-8 h-8 text-brand-600 mb-2" />
                <div className="text-2xl font-display font-bold text-gray-900">Accredited</div>
                <div className="text-sm text-gray-500">Future-focused Courses</div>
              </div>
            </div>

            {/* Infinite Scrolling Images */}
            <div className="mt-20 overflow-hidden relative w-full pt-12">
              {/* Optional blur overlays for edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes infinite-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-50% - 1rem)); }
                }
                .animate-infinite-scroll {
                  animation: infinite-scroll 25s linear infinite;
                  width: max-content;
                }
                .animate-infinite-scroll:hover {
                  animation-play-state: paused;
                }
              `}} />

              <div className="animate-infinite-scroll flex gap-8 items-center">
                {/* Loop twice for seamless scrolling */}
                {[...Array(2)].map((_, loopIdx) => (
                  <React.Fragment key={`loop-${loopIdx}`}>
                    {[
                      "/carousel1.jpg",
                      "/carousel2.jpg",
                      "/carousel3.jpg",
                      "/carousel4.jpg",
                      "/carousel5.jpg"
                    ].map((src, idx) => (
                      <div
                        key={idx}
                        className="min-w-[400px] h-[260px] bg-gray-100 rounded-2xl flex-shrink-0 overflow-hidden border border-gray-200 shadow-sm"
                      >
                        <img
                          src={src}
                          alt={`Students having fun ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Decorative Geometrical Elements - Left */}
          <div className="absolute -left-16 top-20 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -left-8 bottom-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

          {/* Decorative Geometrical Elements - Right */}
          <div className="absolute -right-16 bottom-20 w-56 h-56 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
          <div className="absolute -right-10 top-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">
                Simple, accessible pricing
              </h2>
              <p className="text-lg text-gray-500 mb-12">No subscriptions. No hidden costs.</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
                  One-time payment
                </div>

                <div className="space-y-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ages 7 to 14</h3>
                    <div className="flex justify-center items-baseline">
                      <span className="text-5xl font-display font-bold text-gray-900 tracking-tight">50 AED</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">Mission Hide & Seek • Across the Board</p>
                  </div>
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ages 14 to 18 (Accredited)</h3>
                    <div className="flex justify-center items-baseline">
                      <span className="text-5xl font-display font-bold text-gray-900 tracking-tight">250 AED</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">Startup School • The Internship</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">Full lifetime access to your chosen programme materials.</p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0 shadow-sm">
                      <Award className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Optional NCON Certification</h4>
                      <p className="text-sm text-gray-500 mt-1">Add a recognised certificate upon completion for just £7.50 during checkout.</p>
                    </div>
                  </div>
                </div>

                <a
                  href={TYPEFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
                >
                  Enroll Now
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="py-24 px-6 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  q: "Who are these programmes for?",
                  a: "Students who would benefit from structure, confidence, and practical real-world learning while studying from home."
                },
                {
                  q: "How are the programmes delivered?",
                  a: "Online, with flexible access designed to fit around home learning. Students can progress at their own pace."
                },
                {
                  q: "Do students receive a certificate?",
                  a: "Yes — NCON certification is available as an optional add-on for £7.50 during checkout."
                },
                {
                  q: "Can my child take more than one course?",
                  a: "Yes, parents can choose one or more programmes depending on what suits their child best."
                }
              ].map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA SECTION */}
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-500 text-white pt-24 pb-0 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-24">
            {/* ABOUT section */}
            <div className="flex flex-col gap-5 md:w-1/3">
              <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-2 text-white" style={{ color: 'white' }}>ABOUT</h4>
              <a href="https://www.8billionideas.com/about" className="hover:text-white/80 transition-colors text-base font-bold text-white" style={{ color: 'white' }}>Our Mission</a>
              <a href="https://www.8billionideas.com/8billionideas-meet-the-team" className="hover:text-white/80 transition-colors text-base font-bold text-white" style={{ color: 'white' }}>Meet the team</a>
              <a href="https://www.8billionideas.com/careers" className="hover:text-white/80 transition-colors text-base font-bold text-white" style={{ color: 'white' }}>Careers</a>
            </div>

            {/* Right section */}
            <div className="flex flex-col md:items-end text-left md:text-right md:w-2/3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-10 max-w-lg leading-[1.1] text-white" style={{ color: 'white' }}>
                Giving every student on the planet the skills and belief to change the world
              </h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/8billionideas2.0/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-500 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://x.com/8billionideas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-500 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://uk.linkedin.com/company/8billionideas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-500 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom massive logo section */}
        <div className="w-full flex items-end justify-center translate-y-[22%] px-4">
          <div className="w-full text-center">
            <div className="font-display font-bold tracking-tighter text-white leading-none" style={{ fontSize: 'clamp(4rem, 15vw, 24rem)' }}>
              8billionideas
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 md:hidden z-50 pb-safe">
        <a
          href={TYPEFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-brand-600 rounded-xl shadow-sm active:scale-[0.98] transition-all"
        >
          Choose Programme
        </a>
      </div>
    </div>
  );
}

const FAQItem: React.FC<{ question: string, answer: string, delay: number }> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        >
          <span className="font-medium text-gray-900 pr-4">{question}</span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gray-100' : ''}`}>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-gray-500 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}
