"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Inner Clarity Session", href: "/inner-clarity-session" },
  { label: "Intuitive Healing", href: "/intuitive-healing" },
  { label: "Womb Healing", href: "/womb-healing" },
  { label: "Book A Session", href: "/book-a-session" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Corporate Workshop", href: "/corporate-workshop" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f7f2e8]/88 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[92rem] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="SHWAASTIKA WELLNESS home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c8d9e5] bg-white/75 text-[10px] font-semibold text-[#2f4150] shadow-sm">
            SW
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold tracking-[0.04em] text-[#263542]">SHWAASTIKA WELLNESS</span>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[#8b9a72]">AKR WELLNESS</span>
            <span className="block text-[10px] italic text-[#8a7764]">By Preeti Semwal</span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll
              className={`rounded-full px-2.5 py-2 text-[11px] font-semibold transition ${
                pathname === link.href
                  ? "bg-white text-[#24394a] shadow-sm"
                  : "text-[#41515d] hover:bg-white/65 hover:text-[#24394a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/book-a-session"
            scroll
            className="rounded-full bg-[#2f3033] px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-md shadow-[#2f3033]/12 transition hover:-translate-y-0.5 hover:bg-[#4f6574]"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ef] bg-white/80 text-[#263542] shadow-sm xl:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/70 bg-[#f7f2e8] xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold ${
                    pathname === link.href
                      ? "bg-white text-[#24394a] shadow-sm"
                      : "text-[#41515d] hover:bg-white/65"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-a-session"
                scroll
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-[#2f3033] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
