/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import assets from "../../assets/assets";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/work" },
  { name: "About", path: "/about" },
];

const Navbar = ({ theme, setTheme }) => {
  const [sidebaropen, setSidebarOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  const closeMenu = () => {
    setSidebarOpen(false);
  };

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");

    const handleResize = (event) => {
      if (event.matches) {
        setSidebarOpen(false);
      }
    };

    desktop.addEventListener("change", handleResize);

    return () => {
      desktop.removeEventListener("change", handleResize);
    };
  }, []);

  // Lock background scrolling and support keyboard navigation.
  useEffect(() => {
    if (!sidebaropen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"]'
      );

      if (!elements?.length) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleHistoryNavigation = () => {
      setSidebarOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handleHistoryNavigation);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(
        "popstate",
        handleHistoryNavigation
      );

      menuButton?.focus();
    };
  }, [sidebaropen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.div
        data-site-navbar
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          sticky top-0 z-30
          flex items-center justify-between gap-4
          px-4 sm:px-12 lg:px-24 xl:px-40
          py-4
          backdrop-blur-xl
          font-medium
          bg-white/50 dark:bg-gray-900/70
        "
      >
        {/* LOGO */}

        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Growth Pilot home"
          className="shrink-0 cursor-pointer"
        >
          <img
            src={
              theme === "dark"
                ? assets.logoBlack1
                : assets.logowhite1
            }
            className="block w-32 sm:w-40"
            alt="Growth Pilot"
          />
        </Link>

        {/* DESKTOP LINKS */}

        <nav
          aria-label="Main navigation"
          className="
            hidden lg:flex
            items-center gap-8
            text-sm font-medium
            text-gray-700 dark:text-white
          "
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="
                whitespace-nowrap
                hover:border-b
                cursor-pointer
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* THEME + MENU + CONTACT */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="flex shrink-0 items-center">
            <ThemeToggleButton
              theme={theme}
              setTheme={setTheme}
            />
          </div>

          <motion.button
            ref={menuButtonRef}
            type="button"
            aria-label="Open navigation"
            aria-expanded={sidebaropen}
            aria-controls="mobile-navigation"
            whileTap={{ scale: 0.85, rotate: 90 }}
            onClick={() => setSidebarOpen(true)}
            className="
              flex shrink-0 items-center justify-center
              lg:hidden cursor-pointer
            "
          >
            <img
              src={
                theme === "dark"
                  ? assets.menu_icon_dark
                  : assets.menu_icon
              }
              alt=""
              className="w-8"
            />
          </motion.button>

          <Link
            to="/contact"
            className="
              group relative
              hidden lg:flex
              shrink-0 items-center gap-2
              overflow-hidden whitespace-nowrap
              rounded-full
              border border-primary
              bg-primary text-white
              px-6 py-2
              text-sm font-medium
              cursor-pointer
              transition-all duration-500
            "
          >
            <span
              className="
                relative z-10
                transition-colors duration-500
                group-hover:text-primary
              "
            >
              Contact Us
            </span>

            <span
              aria-hidden="true"
              className="
                absolute inset-0
                bg-white
                -translate-x-full
                group-hover:translate-x-0
                transition-transform duration-500
                ease-out
              "
            />
          </Link>
        </div>
      </motion.div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {sidebaropen && (
          <motion.div
            ref={dialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="
              fixed inset-0 z-50
              lg:hidden
              bg-white/20 dark:bg-black/30
              backdrop-blur-xl
            "
          >
            <motion.div
              initial={{
                clipPath: "circle(0% at 90% 5%)",
              }}
              animate={{
                clipPath: "circle(150% at 90% 5%)",
              }}
              exit={{
                clipPath: "circle(0% at 90% 5%)",
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="
                relative
                flex h-full w-full flex-col
                items-center justify-center
                overflow-y-auto
                bg-primary text-white
                px-6 py-20
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-linear-to-br
                  from-white/20
                  via-transparent
                  to-black/20
                "
              />

              {/* CLOSE BUTTON */}

              <motion.button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation"
                onClick={closeMenu}
                whileTap={{ scale: 0.8, rotate: 90 }}
                className="
                  absolute right-6 top-6 z-20
                  flex items-center justify-center
                  cursor-pointer
                "
              >
                <img
                  src={assets.close_icon}
                  alt=""
                  className="w-6"
                />
              </motion.button>

              {/* MOBILE LINKS */}

              <motion.nav
                aria-label="Mobile navigation"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.35,
                    },
                  },
                }}
                className="
                  relative z-10
                  flex flex-col items-center gap-8
                  text-3xl font-semibold
                "
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="
                        inline-block cursor-pointer
                        hover:scale-110 transition-all
                      "
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="
                      mt-4 inline-block
                      rounded-full
                      bg-white text-primary
                      px-8 py-3
                      text-base font-semibold
                      shadow-lg cursor-pointer
                    "
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;