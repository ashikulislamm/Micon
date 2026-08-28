"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoWhite from "@/public/Logo_White.png";
import LogoBlack from "@/public/Logo_Black.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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

  // Use black logo when scrolled down OR when mobile menu drawer is open
  const logoSrc = isScrolled || isOpen ? LogoBlack : LogoWhite;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          isOpen
            ? "bg-card border-b border-border shadow-md py-0"
            : isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border py-0"
            : "bg-transparent border-b border-transparent shadow-none py-2"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Dynamic Logo Switching */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-36 h-16 transition-transform group-hover:scale-105">
                <Image
                  src={logoSrc}
                  alt="MICON Logo"
                  className="object-contain w-full h-full filter drop-shadow-sm transition-opacity duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span
                      className={`font-body text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary font-bold"
                          : isScrolled
                          ? "text-foreground/80 hover:text-primary"
                          : "text-white/90 hover:text-primary drop-shadow-xs"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="font-heading text-xs tracking-wider uppercase font-semibold rounded-full shadow-lg hover:scale-105 transition-all bg-primary hover:bg-primary/90 text-white"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                isScrolled || isOpen ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer (High z-index to overlay page sticky bars) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/60 backdrop-blur-md z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-full sm:max-w-sm bg-card shadow-2xl z-[65] lg:hidden overflow-y-auto border-l border-border"
            >
              <div className="flex flex-col p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-heading text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "text-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  className="pt-4"
                >
                  <Link href="/quote">
                    <Button size="lg" className="w-full font-heading text-xs uppercase tracking-wider font-semibold rounded-full shadow-lg">
                      Get a Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
