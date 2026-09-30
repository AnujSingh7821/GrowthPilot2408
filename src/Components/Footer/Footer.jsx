/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="
        bg-slate-50
        dark:bg-gray-900
        px-4
        sm:px-10
        lg:px-24
        xl:px-40
        pt-12
      "
    >
      {/* ================= FOOTER TOP ================= */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="
          flex
          flex-col
          items-start
          text-gray-700
          dark:text-gray-400
        "
      >
        {/* LOGO */}

        <Link to="/">
          <img
            src={
              theme === "dark"
                ? assets.logoBlack1
                : assets.logowhite1
            }
            className="w-36 sm:w-44 mb-5"
            alt="Growth Pilot"
          />
        </Link>

        <p className="max-w-md text-sm leading-6 mb-7">
          From strategy to execution, we craft digital solutions that move
          your business forward.
        </p>

        {/* ================= NAV LINKS ================= */}

        <ul
          className="
            flex
            flex-wrap
            items-center
            gap-x-7
            gap-y-3
            text-sm
            font-medium
          "
        >
          <li>
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="hover:text-primary transition-colors duration-300"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/work"
              className="hover:text-primary transition-colors duration-300"
            >
              Our Work
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* ================= DIVIDER ================= */}

      <hr className="border-gray-200 dark:border-gray-700 mt-10 mb-6" />

      {/* ================= FOOTER BOTTOM ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className="
          pb-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-5
          text-sm
          text-gray-500
        "
      >
        <p className="text-center sm:text-left">
          Copyright 2026 © Growth Pilot. All Rights Reserved.
        </p>

        {/* ================= SOCIAL ICONS ================= */}

        <div className="flex items-center gap-4">
          {/* FACEBOOK */}

          <a
            href="https://www.facebook.com/share/1B9CezTiZr/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:-translate-y-1
              hover:opacity-80
              transition-all
              duration-300
            "
          >
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-5 h-5"
            />
          </a>

          {/* TWITTER / X */}

          <a
            href="https://x.com/growth_pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:-translate-y-1
              hover:opacity-80
              transition-all
              duration-300
            "
          >
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-5 h-5"
            />
          </a>

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/growthpilot_official?igsh=MTc3bHZiN2ppbWlybg=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:-translate-y-1
              hover:opacity-80
              transition-all
              duration-300
            "
          >
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/growth-pilot-3aa6b23b8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:-translate-y-1
              hover:opacity-80
              transition-all
              duration-300
            "
          >
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;