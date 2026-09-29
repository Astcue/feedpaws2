import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work" },
  { to: "/our-motive", label: "Our Motive" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/directors-message", label: "Director's Message" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 12);

      if (isMobileMenuOpen || currentScrollY < 80) {
        setIsHidden(false);
      } else if (currentScrollY > previousScrollY.current + 8) {
        setIsHidden(true);
      } else if (currentScrollY < previousScrollY.current - 8) {
        setIsHidden(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-3 left-0 right-0 z-40 px-3 transition-transform duration-300 ease-in-out ${
          isHidden && !isMobileMenuOpen ? "-translate-y-[120%]" : "translate-y-0"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between h-16 md:h-20 rounded-[1.75rem] border backdrop-blur-2xl dark:backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/72 dark:bg-background/82 border-border shadow-medium"
              : "bg-white/60 dark:bg-background/65 border-border/60 shadow-soft"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="https://i.ibb.co/YFqj0WYr/Whats-App-Image-2025-11-04-at-10-09-36-0bf639c7.jpg"
              alt="Feed Paws Initiative logo"
              className="object-cover w-10 h-10 rounded-full ring-1 ring-border md:w-11 md:h-11"
            />
            <span className="text-lg font-serif font-medium leading-tight text-foreground md:text-xl">
              Feed Paws<span className="hidden sm:inline"> Initiative</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-nav-pill"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="items-center hidden gap-3 lg:flex">
            <ThemeToggle />
            <Link
              to="/donate"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="flex items-center justify-center w-10 h-10 border rounded-full lg:hidden border-border bg-card"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 lg:hidden bg-foreground/30 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 z-40 p-3 mt-[5.75rem] rounded-2xl bg-card/80 backdrop-blur-2xl shadow-medium border border-border lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base rounded-xl transition-colors ${
                        isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-3 text-base font-semibold text-center rounded-xl bg-primary text-primary-foreground"
                >
                  Donate
                </Link>
                <div className="flex items-center justify-between px-4 py-3 mt-1 text-base text-foreground">
                  <span>Dark mode</span>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
