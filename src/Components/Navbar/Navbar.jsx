/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import assets from "../../assets/assets";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sidebaropen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    setSidebarOpen(false);

    setTimeout(() => {
      navigate(path);
    }, 450);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-30 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
      >
        <img
          src={theme === "dark" ? assets.logoBlack1 : assets.logowhite1}
          className="w-32 sm:w-40 cursor-pointer"
          alt=""
          onClick={() => navigate("/")}
        />

        {/* DESKTOP LINKS */}
        <div className="hidden sm:flex items-center gap-8 text-gray-700 dark:text-white text-sm">
          <a
            onClick={() => handleNav("/")}
            className="hover:border-b cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleNav("/services")}
            className="hover:border-b cursor-pointer"
          >
            Services
          </a>
          <a
            onClick={() => handleNav("/work")}
            className="hover:border-b cursor-pointer"
          >
            Our Work
          </a>
          <a
            onClick={() => handleNav("/about")}
            className="hover:border-b cursor-pointer"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleButton theme={theme} setTheme={setTheme} />

          <motion.img
            whileTap={{ scale: 0.85, rotate: 90 }}
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          <a
            onClick={() => navigate("/contact")}
            className="group relative overflow-hidden text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer border border-primary transition-all duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
              Contact Us
            </span>

            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {sidebaropen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-50 sm:hidden bg-white/20 dark:bg-black/30 backdrop-blur-xl"
          >
            <motion.div
              initial={{ clipPath: "circle(0% at 90% 5%)" }}
              animate={{ clipPath: "circle(150% at 90% 5%)" }}
              exit={{ clipPath: "circle(0% at 90% 5%)" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-full bg-primary text-white flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-black/20" />

              <motion.img
                src={assets.close_icon}
                alt=""
                onClick={() => setSidebarOpen(false)}
                whileTap={{ scale: 0.8, rotate: 90 }}
                className="w-6 absolute right-6 top-6 cursor-pointer z-20"
              />

              <motion.div
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
                className="relative z-10 flex flex-col items-center gap-8 text-3xl font-semibold"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Our Work", path: "/work" },
                  { name: "About", path: "/about" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    onClick={() => handleNav(item.path)}
                    className="cursor-pointer hover:scale-110 transition-all"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  onClick={() => handleNav("/contact")}
                  className="mt-4 bg-white text-primary px-8 py-3 rounded-full text-base font-semibold shadow-lg"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
