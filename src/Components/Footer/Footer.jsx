/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";

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

      <div
        className="
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-start
        "
      >
        {/* LEFT SIDE */}

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
          <img
            src={
              theme === "dark"
                ? assets.logoBlack1
                : assets.logowhite1
            }
            className="w-36 sm:w-44 mb-5"
            alt="Growth Pilot"
          />

          <p className="max-w-md text-sm leading-6 mb-7">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          {/* NAV LINKS */}

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
              <a
                href="/"
                className="
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/work"
                className="
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                Our Work
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE - WHATSAPP */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="
            w-full
            lg:max-w-lg
            lg:ml-auto
            text-gray-600
            dark:text-gray-400
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-gray-800
              dark:text-white
            "
          >
            Join Our Community
          </h3>

          <p className="text-sm mt-2 leading-6">
            Get updates, offers & connect with us directly on WhatsApp.
          </p>

          {/* WHATSAPP BOX */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className="mt-6"
          >
            <div
              className="
                flex
                sm:flex-row
                flex-col
                sm:items-center
                sm:justify-between
                gap-4
                border
                border-gray-200
                dark:border-gray-700
                rounded-2xl
                bg-white
                dark:bg-gray-800
                p-4
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-green-50
                    dark:bg-green-500/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <img
                    src={assets.whatsapp_icon1}
                    alt="WhatsApp"
                    className="w-8 h-8"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-gray-800
                      dark:text-white
                    "
                  >
                    Growth Pilot Community
                  </p>

                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                    Join us on WhatsApp
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919664145546"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  bg-primary
                  text-white
                  px-6
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  border
                  border-primary
                  transition-all
                  duration-500
                  whitespace-nowrap
                "
              >
                <span
                  className="
                    relative
                    z-10
                    transition-colors
                    duration-500
                    group-hover:text-primary
                  "
                >
                  Join Now
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-white
                    -translate-x-full
                    group-hover:translate-x-0
                    transition-transform
                    duration-500
                    ease-out
                  "
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* DIVIDER */}

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

        {/* SOCIAL ICONS */}

        <div className="flex items-center gap-4">
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