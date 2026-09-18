/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Social Media Growth",
      subtitle: "Build. Engage. Grow.",
      description:
        "Creative social strategies designed to grow your audience, strengthen engagement and build a powerful digital presence.",
      image:
        assets.heroimg3,
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="hero"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        dark:bg-black
        text-gray-900
        dark:text-white
        px-4
        sm:px-8
        lg:px-20
        xl:px-32
        pt-24
        sm:pt-28
        lg:pt-32
        pb-24
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          -top-100
          left-1/2
          -translate-x-1/2
          w-237.5
          h-237.5
          rounded-full
          bg-[#4F46E6]/12
          dark:bg-[#4F46E6]/18
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[35%]
          -left-55
          w-125
          h-125
          rounded-full
          bg-purple-500/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[48%]
          -right-55
          w-125
          h-125
          rounded-full
          bg-blue-500/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          dark:opacity-[0.045]
          pointer-events-none
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
        className="
          absolute
          top-0
          left-0
          right-0
          h-40
          bg-linear-to-b
          from-white
          via-white/70
          to-transparent
          dark:from-black
          dark:via-black/70
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          max-w-350
          mx-auto
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* ================= TRUST BADGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex
            items-center
            gap-3
            border
            border-gray-200
            dark:border-white/10
            bg-white/75
            dark:bg-white/4
            backdrop-blur-xl
            py-2
            px-2
            pr-5
            rounded-full
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            mb-7
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              bg-gray-50
              dark:bg-white/6
              rounded-full
              px-3
              py-1.5
              border
              border-gray-100
              dark:border-white/5
            "
          >
            <img
              src={assets.grouplogo}
              alt="Growth Pilot"
              className="w-16 sm:w-20"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex w-2.5 h-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  w-full
                  h-full
                  rounded-full
                  bg-green-400
                  opacity-75
                  animate-ping
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  w-2.5
                  h-2.5
                  bg-green-500
                "
              />
            </span>

            <p
              className="
                text-xs
                sm:text-sm
                font-medium
                text-gray-600
                dark:text-gray-300
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
          className="
            flex
            items-center
            gap-3
            mb-5
          "
        >
          <span
            className="
              hidden
              sm:block
              w-10
              h-px
              bg-linear-to-r
              from-transparent
              to-[#4F46E6]
            "
          />

          <p
            className="
              text-[11px]
              sm:text-xs
              uppercase
              tracking-[0.28em]
              font-semibold
              text-[#4F46E6]
            "
          >
            Strategy • Creativity • Growth
          </p>

          <span
            className="
              hidden
              sm:block
              w-10
              h-px
              bg-linear-to-r
              from-[#4F46E6]
              to-transparent
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
            text-[43px]
            sm:text-[56px]
            md:text-[68px]
            lg:text-[78px]
            xl:text-[88px]
            leading-[1.02]
            font-semibold
            tracking-[-0.045em]
            text-gray-950
            dark:text-white
          "
        >
          We Turn Ideas Into
          <br />

          <span
            className="
              relative
              inline-block
              mt-1
              bg-linear-to-r
              from-[#3730A3]
              via-[#756EFF]
              to-[#2563EB]
              dark:from-[#A7A4FF]
              dark:via-[#817AFF]
              dark:to-[#5C8EFF]
              bg-clip-text
              text-transparent
            "
          >
            Digital Growth.
          </span>
        </motion.h1>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 55,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.35,
          }}
          className="
            relative
            w-full
            max-w-295
            mt-12
            sm:mt-14
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              -inset-10
              bg-linear-to-r
              from-[#4F46E6]/25
              via-purple-500/10
              to-blue-500/25
              blur-[80px]
              rounded-[60px]
              opacity-70
              pointer-events-none
            "
          />

          {/* TOP LINE */}

          <div
            className="
              absolute
              -top-px
              left-[12%]
              right-[12%]
              h-px
              bg-linear-to-r
              from-transparent
              via-[#655DFF]
              to-transparent
              z-30
            "
          />

          {/* CAROUSEL CONTAINER */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              sm:rounded-[30px]
              border
              border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-[#090B12]
              shadow-[0_35px_90px_rgba(15,23,42,0.16)]
              dark:shadow-[0_40px_120px_rgba(0,0,0,0.65)]
            "
          >
            {/* ================= BROWSER HEADER ================= */}

            <div
              className="
                relative
                z-30
                flex
                items-center
                justify-between
                px-4
                sm:px-6
                py-3
                bg-white/90
                dark:bg-[#0D0F17]/90
                backdrop-blur-xl
                border-b
                border-gray-100
                dark:border-white/5
              "
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  w-[40%]
                  h-8
                  px-4
                  rounded-full
                  bg-gray-100
                  dark:bg-white/5
                  border
                  border-gray-200/60
                  dark:border-white/5
                "
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />

                <span className="text-[10px] text-gray-400 truncate">
                  growthpilotdigital.com
                </span>
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  text-[10px]
                  font-medium
                  text-gray-400
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#4F46E6]
                    animate-pulse
                  "
                />

                Growth Pilot
              </div>
            </div>

            {/* ================= SLIDER ================= */}

            <div
              className="
                relative
                h-90
                sm:h-110
                lg:h-140
                overflow-hidden
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  {/* IMAGE */}

                  <motion.img
                    key={slides[currentSlide].image}
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeOut",
                    }}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  {/* OVERLAYS */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-r
                      from-black/90
                      via-black/60
                      to-black/10
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      -left-25
                      top-1/2
                      -translate-y-1/2
                      w-105
                      h-105
                      rounded-full
                      bg-[#4F46E6]/30
                      blur-[120px]
                    "
                  />

                  {/* ================= SLIDE CONTENT ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      px-7
                      sm:px-12
                      lg:px-16
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15,
                      }}
                      className="
                        max-w-145
                        text-left
                      "
                    >
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-3
                          mb-5
                        "
                      >
                        <span
                          className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            backdrop-blur-md
                            text-[11px]
                            text-white
                          "
                        >
                          0{currentSlide + 1}
                        </span>

                        <span
                          className="
                            uppercase
                            tracking-[0.25em]
                            text-[10px]
                            sm:text-xs
                            font-semibold
                            text-[#AAA6FF]
                          "
                        >
                          Our Expertise
                        </span>
                      </div>

                      <p
                        className="
                          text-[#AAA6FF]
                          text-xs
                          sm:text-sm
                          font-medium
                          mb-3
                        "
                      >
                        {slides[currentSlide].subtitle}
                      </p>

                      <h2
                        className="
                          text-white
                          text-3xl
                          sm:text-5xl
                          lg:text-6xl
                          leading-[1.05]
                          tracking-[-0.035em]
                          font-semibold
                        "
                      >
                        {slides[currentSlide].title}
                      </h2>

                      <p
                        className="
                          mt-5
                          max-w-lg
                          text-sm
                          sm:text-base
                          leading-7
                          text-white/70
                        "
                      >
                        {slides[currentSlide].description}
                      </p>

                      <Link
                        to="/services"
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          mt-7
                          px-5
                          py-2.5
                          rounded-full
                          bg-white
                          text-gray-900
                          text-xs
                          sm:text-sm
                          font-medium
                          hover:bg-[#4F46E6]
                          hover:text-white
                          transition-all
                          duration-300
                        "
                      >
                        Explore Service

                        <span
                          className="
                            transition-transform
                            duration-300
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

              {/* ================= PREVIOUS ================= */}

              <button
                type="button"
                aria-label="Previous slide"
                onClick={prevSlide}
                className="
                  absolute
                  left-5
                  sm:left-auto
                  sm:right-20
                  bottom-5
                  sm:bottom-6
                  z-40
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  backdrop-blur-xl
                  text-white
                  hover:bg-[#4F46E6]
                  hover:border-[#4F46E6]
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                ←
              </button>

              {/* ================= NEXT ================= */}

              <button
                type="button"
                aria-label="Next slide"
                onClick={nextSlide}
                className="
                  absolute
                  left-18
                  sm:left-auto
                  sm:right-6
                  bottom-5
                  sm:bottom-6
                  z-40
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  backdrop-blur-xl
                  text-white
                  hover:bg-[#4F46E6]
                  hover:border-[#4F46E6]
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                →
              </button>

              {/* ================= COUNTER ================= */}

              <div
                className="
                  absolute
                  left-6
                  bottom-7
                  z-40
                  hidden
                  sm:flex
                  items-center
                  gap-2
                "
              >
                <span className="text-white text-xs font-medium">
                  0{currentSlide + 1}
                </span>

                <div className="w-16 h-px bg-white/20">
                  <motion.div
                    key={`progress-${currentSlide}`}
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 5,
                      ease: "linear",
                    }}
                    className="
                      h-full
                      bg-[#817AFF]
                    "
                  />
                </div>

                <span className="text-white/40 text-xs">
                  0{slides.length}
                </span>
              </div>
            </div>

            {/* ================= DOTS ================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-4
                bg-white
                dark:bg-[#0D0F17]
              "
            >
              {slides.map((slide, index) => (
                <button
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    h-1.5
                    rounded-full
                    cursor-pointer
                    transition-all
                    duration-500
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
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              hidden
              xl:flex
              absolute
              -left-10
              top-[28%]
              z-40
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white/90
              dark:bg-[#141620]/90
              backdrop-blur-xl
              border
              border-gray-200
              dark:border-white/10
              shadow-xl
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                bg-[#4F46E6]/10
                text-[#4F46E6]
                text-lg
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
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              hidden
              xl:flex
              absolute
              -right-8
              bottom-[22%]
              z-40
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white/90
              dark:bg-[#141620]/90
              backdrop-blur-xl
              border
              border-gray-200
              dark:border-white/10
              shadow-xl
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-purple-500/10
                flex
                items-center
                justify-center
                text-[#4F46E6]
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

        {/* =====================================================
            DESCRIPTION BELOW CAROUSEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            flex-col
            items-center
            mt-16
            sm:mt-20
          "
        >
          {/* DESCRIPTION */}

          <p
            className="
              max-w-180
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              sm:leading-8
              text-gray-500
              dark:text-gray-400
              text-center
            "
          >
            From standout visuals to smarter marketing, we combine creativity,
            strategy and performance to help brands build stronger digital
            experiences and grow with purpose.
          </p>

          {/* ================= CTA BUTTONS ================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
              mt-8
            "
          >
            <Link
              to="/services"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                gap-2
                min-w-46.25
                px-7
                py-3.5
                rounded-full
                bg-[#4F46E6]
                text-white
                text-sm
                font-medium
                shadow-[0_12px_35px_rgba(79,70,230,0.30)]
                hover:shadow-[0_18px_45px_rgba(79,70,230,0.42)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-linear-to-r
                  from-[#4338CA]
                  to-[#2563EB]
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              <span className="relative z-10">
                Explore Services
              </span>

              <span
                className="
                  relative
                  z-10
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                min-w-46.25
                px-7
                py-3.5
                rounded-full
                border
                border-gray-300
                dark:border-white/15
                bg-white/70
                dark:bg-white/4
                backdrop-blur-xl
                text-gray-800
                dark:text-white
                text-sm
                font-medium
                hover:border-[#4F46E6]/70
                hover:text-[#4F46E6]
                dark:hover:text-[#A7A4FF]
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              Let's Talk

              <span
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>
          </div>

          {/* ================= SERVICES PILLS ================= */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-2
              sm:gap-3
              mt-8
            "
          >
            {services.map((service) => (
              <div
                key={service}
                className="
                  flex
                  items-center
                  gap-2
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/50
                  dark:bg-white/2.5
                  text-[11px]
                  sm:text-xs
                  font-medium
                  text-gray-500
                  dark:text-gray-400
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#4F46E6]
                  "
                />

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