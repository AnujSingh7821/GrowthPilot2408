/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const workData = [
    {
      title: "Instagram Dashboard Management",
      description:
        "Strategic social media management focused on stronger engagement, better reach and consistent audience growth.",
      icon: assets.instaimg,
      path: "/social-media",
      btn: "View Social Media",
    },
    {
      title: "Graphical Promotion",
      description:
        "Creative promotional visuals designed to strengthen your brand identity and capture audience attention.",
      icon: assets.graphics,
      path: "/graphic-design",
      btn: "View Graphic Design",
    },
  ];

  return (
    <section
      id="our-work"
      className="
        relative
        overflow-hidden
        px-4
        sm:px-12
        lg:px-24
        xl:px-40
        pt-10
        sm:pt-12
        lg:pt-14
        pb-24
        sm:pb-28
        text-gray-700
        dark:text-white
      "
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                text-primary
                uppercase
                tracking-[0.15em]
              "
            >
              Our Work
            </span>

            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-medium
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            Our latest work
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Explore how we combine strategy, creativity and digital expertise
            to build meaningful brand experiences.
          </p>
        </motion.div>

        {/* ================= WORK CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            lg:gap-8
            mt-10
            sm:mt-12
          "
        >
          {workData.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-[#111827]
                shadow-[0_18px_60px_rgba(0,0,0,0.07)]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]
                hover:border-primary/30
                hover:shadow-[0_25px_70px_rgba(79,70,229,0.16)]
                transition-all
                duration-500
              "
            >
              {/* TOP ACCENT */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-0
                  h-0.5
                  bg-linear-to-r
                  from-transparent
                  via-primary
                  to-transparent
                  group-hover:w-full
                  transition-all
                  duration-500
                  z-20
                "
              />

              {/* IMAGE */}

              <div className="relative overflow-hidden">
                <img
                  src={work.icon}
                  alt={work.title}
                  className="
                    block
                    w-full
                    aspect-video
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.035]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-black/45
                    backdrop-blur-md
                    border
                    border-white/20
                    text-white
                    text-sm
                    font-medium
                  "
                >
                  0{index + 1}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-0.5 bg-primary rounded-full" />

                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-primary
                    "
                  >
                    Featured Work
                  </span>
                </div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  {work.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    leading-7
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {work.description}
                </p>

                {/* BUTTON */}

                <button
                  onClick={() => navigate(work.path)}
                  className="
                    group/btn
                    relative
                    overflow-hidden
                    mt-7
                    w-max
                    flex
                    items-center
                    gap-2
                    bg-primary
                    text-white
                    border
                    border-primary
                    px-6
                    py-3
                    rounded-full
                    text-sm
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-500
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                      transition-colors
                      duration-500
                      group-hover/btn:text-primary
                    "
                  >
                    {work.btn}
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      text-lg
                      transition-all
                      duration-500
                      group-hover/btn:text-primary
                      group-hover/btn:translate-x-1
                    "
                  >
                    →
                  </span>

                  <span
                    className="
                      absolute
                      inset-0
                      bg-white
                      -translate-x-full
                      group-hover/btn:translate-x-0
                      transition-transform
                      duration-500
                      ease-out
                    "
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;