/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Social Media Growth",
    subtitle: "Build. Engage. Grow.",
    description:
      "Creative social strategies designed to grow your audience, strengthen engagement and build a powerful digital presence.",
    image: assets.heroimg3,
  },
  {
    id: 2,
    title: "Graphic Designing",
    subtitle: "Design That Gets Noticed.",
    description:
      "Modern visual identities and creative designs crafted to make your brand memorable, consistent and instantly recognizable.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 3,
    title: "SEO Optimization",
    subtitle: "Get Found. Stay Ahead.",
    description:
      "Performance-focused SEO strategies built to improve search visibility, rankings and long-term organic growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 4,
    title: "Digital Advertising",
    subtitle: "Reach The Right Audience.",
    description:
      "Targeted digital campaigns designed to reach the right audience, generate engagement and drive measurable conversions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
  },
];

const services = [
  "Social Media",
  "Graphic Design",
  "SEO",
  "Advertising",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="
        relative w-full overflow-hidden
        bg-white dark:bg-black
        text-gray-900 dark:text-white
        px-4 sm:px-8 lg:px-20 xl:px-32
        pt-8 sm:pt-10 lg:pt-16
        pb-16 sm:pb-24
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -top-100 left-1/2 -translate-x-1/2
          h-237.5 w-237.5 rounded-full
          bg-[#4F46E6]/12 dark:bg-[#4F46E6]/18
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          top-[35%] -left-55
          h-125 w-125 rounded-full
          bg-purple-500/10 blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          top-[48%] -right-55
          h-125 w-125 rounded-full
          bg-blue-500/10 blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025] dark:opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #4F46E6 1px, transparent 1px),
            linear-gradient(to bottom, #4F46E6 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-0 right-0 top-0
          h-20 sm:h-28 lg:h-40
          bg-linear-to-b
          from-white via-white/70 to-transparent
          dark:from-black dark:via-black/70
        "
      />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative z-10 mx-auto
          flex max-w-350 flex-col
          items-center text-center
        "
      >
        {/* ================= TRUST BADGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            mb-6 sm:mb-7
            inline-flex max-w-full items-center
            gap-2 sm:gap-3
            rounded-full border
            border-gray-200 dark:border-white/10
            bg-white/75 dark:bg-white/4
            p-2 pr-3 sm:pr-5
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div
            className="
              flex shrink-0 items-center justify-center
              rounded-full border
              border-gray-100 dark:border-white/5
              bg-gray-50 dark:bg-white/6
              px-2 sm:px-3 py-1.5
            "
          >
            <img
              src={assets.grouplogo}
              alt="Growth Pilot"
              className="h-auto w-12 sm:w-20"
            />
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span
                className="
                  absolute inline-flex h-full w-full
                  animate-ping rounded-full
                  bg-green-400 opacity-75
                "
              />

              <span
                className="
                  relative inline-flex h-2.5 w-2.5
                  rounded-full bg-green-500
                "
              />
            </span>

            <p
              className="
                text-left text-[10px]
                min-[375px]:text-[11px] sm:text-sm
                font-medium leading-4
                text-gray-600 dark:text-gray-300
              "
            >
              Building brands that move forward
            </p>
          </div>
        </motion.div>

        {/* ================= SMALL HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-4 sm:mb-5 flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="
              hidden h-px w-10 sm:block
              bg-linear-to-r
              from-transparent to-[#4F46E6]
            "
          />

          <p
            className="
              text-[10px] sm:text-xs
              font-semibold uppercase
              tracking-[0.18em] sm:tracking-[0.28em]
              text-[#4F46E6]
            "
          >
            Strategy • Creativity • Growth
          </p>

          <span
            aria-hidden="true"
            className="
              hidden h-px w-10 sm:block
              bg-linear-to-r
              from-[#4F46E6] to-transparent
            "
          />
        </motion.div>

        {/* ================= MAIN HEADING ================= */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="
            max-w-275
            text-[clamp(2rem,8.5vw,3.5rem)]
            md:text-[68px]
            lg:text-[78px]
            xl:text-[88px]
            leading-[1.15]
            font-semibold
            tracking-[-0.045em]
            text-gray-950 dark:text-white
          "
        >
          <span className="block">We Turn Ideas Into</span>

          <span
            className="
              mt-1 block
              pb-[0.18em] mb-[-0.18em]
              bg-linear-to-r
              from-[#3730A3]
              via-[#756EFF]
              to-[#2563EB]
              dark:from-[#A7A4FF]
              dark:via-[#817AFF]
              dark:to-[#5C8EFF]
              bg-clip-text text-transparent
            "
          >
            Digital Growth.
          </span>
        </motion.h1>

        {/* ================= CAROUSEL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="
            relative mt-8 sm:mt-14
            w-full max-w-295
          "
        >
          {/* GLOW */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -inset-10
              rounded-[60px]
              bg-linear-to-r
              from-[#4F46E6]/25
              via-purple-500/10
              to-blue-500/25
              opacity-70 blur-[80px]
            "
          />

          {/* TOP LINE */}

          <div
            aria-hidden="true"
            className="
              absolute -top-px left-[12%] right-[12%]
              z-30 h-px
              bg-linear-to-r
              from-transparent via-[#655DFF] to-transparent
            "
          />

          <div
            className="
              relative overflow-hidden
              rounded-3xl sm:rounded-[30px]
              border border-gray-200 dark:border-white/10
              bg-white dark:bg-[#090B12]
              shadow-[0_35px_90px_rgba(15,23,42,0.16)]
              dark:shadow-[0_40px_120px_rgba(0,0,0,0.65)]
            "
          >
            {/* ================= BROWSER HEADER ================= */}

            <div
              className="
                relative z-30
                flex items-center justify-between
                border-b border-gray-100 dark:border-white/5
                bg-white/90 dark:bg-[#0D0F17]/90
                px-4 sm:px-6 py-3
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <div
                className="
                  hidden sm:flex
                  h-8 w-[40%] items-center gap-2
                  rounded-full border
                  border-gray-200/60 dark:border-white/5
                  bg-gray-100 dark:bg-white/5
                  px-4
                "
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />

                <span className="truncate text-[10px] text-gray-400">
                  growthpilotdigital.com
                </span>
              </div>

              <div
                className="
                  hidden sm:flex items-center gap-2
                  text-[10px] font-medium text-gray-400
                "
              >
                <span
                  className="
                    h-1.5 w-1.5 animate-pulse
                    rounded-full bg-[#4F46E6]
                  "
                />
                Growth Pilot
              </div>
            </div>

            {/* ================= SLIDER ================= */}

            <div
              className="
                relative overflow-hidden
                h-115 sm:h-110 lg:h-140
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.65,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  {/* IMAGE */}

                  <motion.img
                    key={activeSlide.image}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 5, ease: "easeOut" }}
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="
                      absolute inset-0
                      h-full w-full object-cover
                    "
                  />

                  {/* OVERLAYS */}

                  <div
                    className="
                      absolute inset-0
                      bg-linear-to-r
                      from-black/90 via-black/60 to-black/10
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-linear-to-t
                      from-black/60 via-transparent to-transparent
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      -left-25 top-1/2 -translate-y-1/2
                      h-105 w-105 rounded-full
                      bg-[#4F46E6]/30 blur-[120px]
                    "
                  />

                  {/* SLIDE CONTENT */}

                  <div
                    className="
                      absolute inset-0 flex items-center
                      px-5 sm:px-12 lg:px-16
                      pt-5 pb-20 sm:pt-0 sm:pb-10
                    "
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="max-w-145 text-left"
                    >
                      <div className="mb-4 sm:mb-5 inline-flex items-center gap-3">
                        <span
                          className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full border border-white/20
                            bg-white/10 backdrop-blur-md
                            text-[11px] text-white
                          "
                        >
                          0{currentSlide + 1}
                        </span>

                        <span
                          className="
                            text-[10px] sm:text-xs
                            font-semibold uppercase
                            tracking-[0.25em] text-[#AAA6FF]
                          "
                        >
                          Our Expertise
                        </span>
                      </div>

                      <p
                        className="
                          mb-3 text-xs sm:text-sm
                          font-medium text-[#AAA6FF]
                        "
                      >
                        {activeSlide.subtitle}
                      </p>

                      <h2
                        className="
                          text-3xl sm:text-5xl lg:text-6xl
                          font-semibold leading-[1.12]
                          tracking-[-0.035em] text-white
                        "
                      >
                        {activeSlide.title}
                      </h2>

                      <p
                        className="
                          mt-4 sm:mt-5 max-w-lg
                          text-sm sm:text-base
                          leading-6 sm:leading-7 text-white/70
                        "
                      >
                        {activeSlide.description}
                      </p>

                      <Link
                        to="/services"
                        className="
                          group mt-5 sm:mt-7
                          inline-flex items-center gap-2
                          rounded-full bg-white
                          px-5 py-2.5
                          text-xs sm:text-sm
                          font-medium text-gray-900
                          transition-all duration-300
                          hover:bg-[#4F46E6] hover:text-white
                        "
                      >
                        Explore Service
                        <span
                          className="
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* PREVIOUS */}

              <button
                type="button"
                aria-label="Previous slide"
                onClick={prevSlide}
                className="
                  absolute bottom-5 sm:bottom-6
                  left-5 sm:left-auto sm:right-20
                  z-40 flex h-11 w-11
                  items-center justify-center
                  rounded-full border border-white/20
                  bg-black/30 text-white backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[#4F46E6] hover:bg-[#4F46E6]
                  cursor-pointer
                "
              >
                ←
              </button>

              {/* NEXT */}

              <button
                type="button"
                aria-label="Next slide"
                onClick={nextSlide}
                className="
                  absolute bottom-5 sm:bottom-6
                  left-18 sm:left-auto sm:right-6
                  z-40 flex h-11 w-11
                  items-center justify-center
                  rounded-full border border-white/20
                  bg-black/30 text-white backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[#4F46E6] hover:bg-[#4F46E6]
                  cursor-pointer
                "
              >
                →
              </button>

              {/* COUNTER */}

              <div
                className="
                  absolute bottom-7 left-6 z-40
                  hidden sm:flex items-center gap-2
                "
              >
                <span className="text-xs font-medium text-white">
                  0{currentSlide + 1}
                </span>

                <div className="h-px w-16 bg-white/20">
                  <motion.div
                    key={`progress-${currentSlide}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-[#817AFF]"
                  />
                </div>

                <span className="text-xs text-white/40">
                  0{slides.length}
                </span>
              </div>
            </div>

            {/* ================= DOTS ================= */}

            <div
              className="
                flex items-center justify-center gap-2
                bg-white dark:bg-[#0D0F17]
                px-4 py-4
              "
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-pressed={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    h-1.5 rounded-full cursor-pointer
                    transition-all duration-500
                    ${
                      currentSlide === index
                        ? "w-10 bg-[#4F46E6]"
                        : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-[#4F46E6]/50"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* ================= FLOATING LEFT ================= */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -left-10 top-[28%] z-40
              hidden xl:flex items-center gap-3
              rounded-2xl border
              border-gray-200 dark:border-white/10
              bg-white/90 dark:bg-[#141620]/90
              px-4 py-3 backdrop-blur-xl shadow-xl
            "
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl bg-[#4F46E6]/10
                text-lg text-[#4F46E6]
              "
            >
              ↗
            </div>

            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Growth Pilot
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Built for Growth
              </p>
            </div>
          </motion.div>

          {/* ================= FLOATING RIGHT ================= */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-8 bottom-[22%] z-40
              hidden xl:flex items-center gap-3
              rounded-2xl border
              border-gray-200 dark:border-white/10
              bg-white/90 dark:bg-[#141620]/90
              px-4 py-3 backdrop-blur-xl shadow-xl
            "
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl bg-purple-500/10 text-[#4F46E6]
              "
            >
              ✦
            </div>

            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Creative
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Strategy + Results
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= DESCRIPTION & CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 flex flex-col items-center"
        >
          <p
            className="
              max-w-180 text-center
              text-sm sm:text-base md:text-lg
              leading-7 sm:leading-8
              text-gray-500 dark:text-gray-400
            "
          >
            From standout visuals to smarter marketing, we combine creativity,
            strategy and performance to help brands build stronger digital
            experiences and grow with purpose.
          </p>

          {/* CTA BUTTONS */}

          <div
            className="
              mt-8 flex flex-col sm:flex-row
              items-center justify-center gap-4
            "
          >
            <Link
              to="/services"
              className="
                group relative inline-flex
                min-w-46.25 items-center justify-center gap-2
                overflow-hidden rounded-full
                bg-[#4F46E6] px-7 py-3.5
                text-sm font-medium text-white
                shadow-[0_12px_35px_rgba(79,70,230,0.30)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(79,70,230,0.42)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-linear-to-r from-[#4338CA] to-[#2563EB]
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">Explore Services</span>

              <span
                className="
                  relative z-10 text-lg
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="
                group inline-flex min-w-46.25
                items-center justify-center gap-2
                rounded-full border
                border-gray-300 dark:border-white/15
                bg-white/70 dark:bg-white/4
                px-7 py-3.5 backdrop-blur-xl
                text-sm font-medium
                text-gray-800 dark:text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#4F46E6]/70
                hover:text-[#4F46E6]
                dark:hover:text-[#A7A4FF]
                hover:shadow-lg
              "
            >
              Let's Talk
              <span
                className="
                  text-base transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>
          </div>

          {/* SERVICES PILLS */}

          <div
            className="
              mt-8 flex flex-wrap
              items-center justify-center gap-2 sm:gap-3
            "
          >
            {services.map((service) => (
              <div
                key={service}
                className="
                  flex items-center gap-2
                  rounded-full border
                  border-gray-200 dark:border-white/10
                  bg-white/50 dark:bg-white/2.5
                  px-3 sm:px-4 py-2 backdrop-blur-md
                  text-[11px] sm:text-xs font-medium
                  text-gray-500 dark:text-gray-400
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E6]" />
                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;