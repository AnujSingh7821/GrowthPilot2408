/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";
import Team from "../Team/Team";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  return (
    <div
      className="relative overflow-hidden text-gray-700 dark:text-white"
      style={{
        backgroundImage: `url(${assets.bgimg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* MAIN OVERLAY */}
      <div className="absolute inset-0 bg-white/90 dark:bg-[#070A12]/94" />

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="absolute top-[35%] -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-12 lg:px-24 xl:px-40">
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-7
              rounded-full
              border border-primary/20
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              shadow-sm
            "
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">
              Welcome to Growth Pilot
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              text-4xl sm:text-5xl lg:text-7xl
              font-semibold
              tracking-tight
              leading-tight
              max-w-5xl
            "
          >
            About  &nbsp;

            <span
              className="
                bg-linear-to-r from-[#a4a2ee] to-[#4F46E6] bg-clip-text text-transparent
              "
            >
              Growth &nbsp;
            </span>
             Pilot
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              max-w-2xl
              mt-6
              text-sm sm:text-lg
              leading-7 sm:leading-8
              text-gray-500
              dark:text-white/65
            "
          >
            We help creators, brands, and businesses build a meaningful digital
            presence through strategy, creativity, authentic engagement and
            sustainable growth.
          </motion.p>

          {/* MINI FEATURES */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex flex-wrap justify-center gap-3 mt-9"
          >
            {[
              "Smart Strategy",
              "Creative Thinking",
              "Long-Term Growth",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  px-5 py-2.5
                  rounded-full
                  border border-gray-200
                  dark:border-white/10
                  bg-white/70
                  dark:bg-white/5
                  backdrop-blur-xl
                  text-xs sm:text-sm
                  shadow-sm
                "
              >
                {item}
              </div>
            ))}
          </motion.div>
        </section>

        {/* ==================================================
            OUR APPROACH
        ================================================== */}

        <section className="py-16 sm:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.6 }}
            className="
              grid
              lg:grid-cols-2
              gap-10 lg:gap-16
              items-center
            "
          >
            {/* IMAGE */}

            <div className="relative group">
              <div
                className="
                  absolute -inset-4
                  bg-linear-to-r
                  from-primary/15
                  to-purple-500/15
                  blur-3xl
                  rounded-[40px]
                  opacity-60
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/30
                  dark:border-white/10
                  shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                "
              >
                <img
                  src={assets.about_img2}
                  alt="Growth Pilot Strategy"
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                    group-hover:scale-[1.02]
                    transition-transform
                    duration-700
                  "
                />
              </div>
            </div>

            {/* CONTENT */}

            <div className="lg:pl-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary rounded-full" />

                <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                  Our Strategy
                </p>
              </div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-semibold
                  tracking-tight
                  leading-tight
                "
              >
                A smarter approach
                <br />
                to digital growth.
              </h2>

              <p className="mt-6 text-gray-500 dark:text-white/65 leading-7">
                At Growth Pilot, we believe sustainable growth starts with
                understanding your audience, your content and your goals.
              </p>

              <p className="mt-4 text-gray-500 dark:text-white/65 leading-7">
                Every creator and business is different, so we build strategies
                around consistency, engagement and long-term performance
                instead of one-size-fits-all solutions.
              </p>

              {/* FEATURE CARDS */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/60
                    dark:bg-white/5
                    border
                    border-gray-200/70
                    dark:border-white/10
                    backdrop-blur-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      rounded-xl
                      bg-primary/10
                      text-primary
                      flex
                      items-center
                      justify-center
                      mb-3
                    "
                  >
                    ✓
                  </div>

                  <h3 className="font-semibold mb-1">
                    Authentic Growth
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-white/55">
                    Strategies focused on genuine audience engagement.
                  </p>
                </div>

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/60
                    dark:bg-white/5
                    border
                    border-gray-200/70
                    dark:border-white/10
                    backdrop-blur-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      rounded-xl
                      bg-primary/10
                      text-primary
                      flex
                      items-center
                      justify-center
                      mb-3
                    "
                  >
                    ↗
                  </div>

                  <h3 className="font-semibold mb-1">
                    Scalable Strategy
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-white/55">
                    Solutions designed to grow alongside your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==================================================
            WHO WE ARE
        ================================================== */}

        <section className="py-16 sm:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              max-w-7xl
              mx-auto
              rounded-4xl
              border
              border-gray-200/70
              dark:border-white/10
              bg-white/55
              dark:bg-white/[0.035]
              backdrop-blur-xl
              shadow-[0_25px_100px_rgba(0,0,0,0.10)]
              p-6
              sm:p-8
              lg:p-10
              xl:p-12
            "
          >
            {/* CARD BACKGROUND EFFECT */}

            <div
              className="
                absolute
                -top-32
                -left-32
                w-80
                h-80
                rounded-full
                bg-primary/10
                blur-[100px]
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                -bottom-32
                -right-32
                w-80
                h-80
                rounded-full
                bg-purple-500/10
                blur-[100px]
                pointer-events-none
              "
            />

            <div
              className="
                relative z-10
                grid
                lg:grid-cols-[0.9fr_1.1fr]
                gap-10
                lg:gap-14
                items-center
              "
            >
              {/* LEFT CONTENT */}

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-0.5 bg-primary rounded-full" />

                  <span
                    className="
                      text-xs sm:text-sm
                      font-semibold
                      text-primary
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    About Us
                  </span>
                </div>

                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-[46px]
                    leading-[1.15]
                    font-semibold
                    tracking-tight
                  "
                >
                  Built for creators,
                  <br />

                  <span
                    className="
                      bg-linear-to-r
                      from-[#4F46E6]
                      to-[#8B5CF6]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    brands & businesses.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-sm
                    sm:text-base
                    text-gray-500
                    dark:text-white/65
                    leading-7
                    max-w-xl
                  "
                >
                  Growth Pilot is a digital growth platform helping creators,
                  businesses and marketers build a stronger and more meaningful
                  online presence.
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    text-gray-500
                    dark:text-white/60
                    leading-7
                    max-w-xl
                  "
                >
                  Our goal is simple — create transparent, creative and scalable
                  digital strategies that connect brands with the right
                  audience.
                </p>

                {/* TAGS */}

                <div className="flex flex-wrap gap-2.5 mt-7">
                  {[
                    "Creative Strategy",
                    "Real Engagement",
                    "Scalable Growth",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        sm:text-sm
                        bg-white/70
                        dark:bg-white/5
                        border
                        border-gray-200
                        dark:border-white/10
                        text-gray-600
                        dark:text-white/70
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* QUOTE */}

                <div className="mt-8 flex gap-4 items-start">
                  <div
                    className="
                      w-0.75
                      min-h-13.75
                      rounded-full
                      bg-linear-to-b
                      from-primary
                      to-purple-500
                    "
                  />

                  <p
                    className="
                      text-sm
                      sm:text-base
                      text-gray-600
                      dark:text-white/70
                      leading-7
                      max-w-lg
                    "
                  >
                    “We focus on meaningful digital presence, not just
                    short-term numbers.”
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}

              <div className="relative flex justify-center lg:justify-end group">
                <div
                  className="
                    absolute
                    inset-5
                    bg-linear-to-r
                    from-blue-500/20
                    via-primary/20
                    to-purple-500/20
                    blur-[60px]
                    rounded-[40px]
                    pointer-events-none
                  "
                />

                <div
                  className="
                    relative
                    w-full
                    max-w-155
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/20
                    dark:border-white/10
                    shadow-[0_25px_80px_rgba(0,0,0,0.22)]
                  "
                >
                  <img
                    src={assets.about_img1}
                    alt="Growth Pilot"
                    className="
                      block
                      w-full
                      h-auto
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-[1.015]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==================================================
            TRANSPARENCY
        ================================================== */}

        <section className="py-20 sm:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div
              className="
                w-12 h-12
                mx-auto
                mb-5
                rounded-2xl
                bg-primary/10
                text-primary
                flex
                items-center
                justify-center
                text-xl
                font-semibold
              "
            >
              ✓
            </div>

            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Trust & Transparency
            </p>

            <h2
              className="
                text-3xl
                sm:text-5xl
                font-semibold
                tracking-tight
              "
            >
              Your safety matters to us.
            </h2>

            <p
              className="
                mt-5
                text-gray-500
                dark:text-white/60
                leading-7
              "
            >
              We believe digital growth should be transparent, responsible and
              respectful of user privacy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* PRIVACY CARD */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                p-7
                sm:p-9
                rounded-[28px]
                bg-white/70
                dark:bg-white/4
                border
                border-gray-200
                dark:border-white/10
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_70px_rgba(79,70,229,0.12)]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-primary/10
                  rounded-full
                  blur-3xl
                "
              />

              <div
                className="
                  relative z-10
                  w-12 h-12
                  rounded-2xl
                  bg-primary/10
                  text-primary
                  flex
                  items-center
                  justify-center
                  text-xl
                  mb-6
                "
              >
                ✉
              </div>

              <h3
                className="
                  relative z-10
                  text-xl
                  sm:text-2xl
                  font-semibold
                  mb-4
                "
              >
                Data Privacy & Email Usage
              </h3>

              <div
                className="
                  relative z-10
                  space-y-4
                  text-sm
                  sm:text-base
                  text-gray-500
                  dark:text-white/60
                  leading-7
                "
              >
                <p>
                  We collect your email and basic usage information only when
                  required to improve your experience and platform performance.
                </p>

                <p>
                  Your email may be used for account access and important
                  service-related communication.
                </p>

                <p>
                  You can unsubscribe from optional marketing communication at
                  any time.
                </p>
              </div>
            </motion.div>

            {/* SAFETY CARD */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                p-7
                sm:p-9
                rounded-[28px]
                bg-white/70
                dark:bg-white/4
                border
                border-gray-200
                dark:border-white/10
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_70px_rgba(124,58,237,0.12)]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-purple-500/10
                  rounded-full
                  blur-3xl
                "
              />

              <div
                className="
                  relative z-10
                  w-12 h-12
                  rounded-2xl
                  bg-purple-500/10
                  text-purple-500
                  flex
                  items-center
                  justify-center
                  text-xl
                  mb-6
                "
              >
                ◈
              </div>

              <h3
                className="
                  relative z-10
                  text-xl
                  sm:text-2xl
                  font-semibold
                  mb-4
                "
              >
                Account Safety & Platform Compliance
              </h3>

              <div
                className="
                  relative z-10
                  space-y-4
                  text-sm
                  sm:text-base
                  text-gray-500
                  dark:text-white/60
                  leading-7
                "
              >
                <p>
                  We prioritize account safety and never access your private
                  messages or confidential personal data.
                </p>

                <div
                  className="
                    p-4
                    rounded-xl
                    bg-gray-100/70
                    dark:bg-white/5
                    border
                    border-gray-200
                    dark:border-white/10
                    text-xs
                    sm:text-sm
                    text-gray-500
                    dark:text-white/55
                  "
                >
                  Growth Pilot is not affiliated with Instagram or Meta
                  Platforms.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================================================
            TEAM
        ================================================== */}

        <section className="pt-16 pb-24 sm:pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              rounded-4xl
              border
              border-gray-200/70
              dark:border-white/10
              bg-white/55
              dark:bg-white/3
              backdrop-blur-xl
              px-3
              sm:px-6
              py-8
              shadow-[0_25px_80px_rgba(0,0,0,0.06)]
            "
          >
            <Team />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;