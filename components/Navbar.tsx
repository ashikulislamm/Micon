"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoWhite from "@/public/Logo_White.png";
import LogoBlack from "@/public/Logo_Black.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const logoSrc = isScrolled || isOpen ? LogoBlack : LogoWhite;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isOpen
            ? "bg-card shadow-xs"
            : isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-xs"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Architectural Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative w-36 h-12 transition-opacity duration-200 group-hover:opacity-90">
                <Image
                  src={logoSrc}
                  alt="MICON - Metal Infrastructures & Constructions Ltd"
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative py-2 group"
                  >
                    <span
                      className={`font-body text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? "text-primary font-semibold"
                          : isScrolled
                          ? "text-foreground/80 hover:text-primary"
                          : "text-white/90 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    ) : (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Area */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact">
                <Button
                  size="pill"
                  variant="default"
                  className="shadow-sm font-heading text-xs uppercase tracking-wider font-semibold px-6 h-10"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isScrolled || isOpen
                  ? "bg-muted text-foreground hover:bg-muted/70"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-over Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 right-0 bottom-0 w-full sm:max-w-sm bg-card shadow-2xl z-40 lg:hidden overflow-y-auto flex flex-col justify-between"
            >
              <div className="p-6 space-y-2">
                <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Navigation
                </p>
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 font-heading text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-bold"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-6 bg-muted/40">
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full font-heading text-xs uppercase tracking-wider">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
