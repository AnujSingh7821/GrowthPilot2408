/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";
import Team from "../Team/Team";

const GlassSection = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden
        rounded-[30px]
        border border-white/20
        bg-white/45 dark:bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_45px_rgba(99,102,241,0.15)]
        p-6 sm:p-8 lg:p-10
        transition-all duration-500
        hover:shadow-[0_0_55px_rgba(99,102,241,0.35)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div
      className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white"
      style={{
        backgroundImage: `url(${assets.bgimg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 dark:bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col gap-20">
        
        {/* HERO SECTION */}
        <GlassSection className="max-w-5xl mx-auto text-center py-14 sm:py-20">

          <div className="flex justify-center mb-6">
            <div className="px-5 py-2 rounded-full border border-primary/20 bg-white/20 dark:bg-white/5 backdrop-blur-xl">
              <p className="text-sm sm:text-base text-[#3559ff] font-medium tracking-wide">
                Welcome to 𝗚𝗿𝗼𝘄𝘁𝗵 𝗣𝗶𝗹𝗼𝘁
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            𝗔𝗯𝗼𝘂𝘁{" "}
            <span className="bg-linear-to-r from-[#3559ff] to-[#7c3aed] bg-clip-text text-transparent">
              𝗚𝗿𝗼𝘄𝘁𝗵𝗣𝗶𝗹𝗼𝘁
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-75 leading-8">
            We help creators, brands, and businesses grow their Instagram
            presence with smart strategies, authentic engagement, and safe
            long-term growth.
          </p>

        </GlassSection>

        {/* OUR APPROACH */}
        <GlassSection>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-sm text-primary font-semibold mb-3">
                Our Strategy
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Our Approach to Growth
              </h2>

              <p className="opacity-70 mb-4 text-xl font-semibold">
                At Growth Pilot, we believe in authentic and sustainable growth
                strategies.
              </p>

              <p className="opacity-70">
                Every account grows differently based on content, consistency,
                and engagement.
              </p>
            </div>

            <div className="flex-1">
              <img
                src={assets.about_img2}
                className="rounded-2xl w-full shadow-xl hover:scale-105 transition duration-500"
                alt=""
              />
            </div>
          </div>
        </GlassSection>

        {/* WHO WE ARE */}
        <GlassSection>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <img
                src={assets.about_img1}
                className="rounded-2xl w-full shadow-xl hover:scale-105 transition duration-500"
                alt=""
              />
            </div>

            <div className="flex-1">
              <p className="text-sm text-primary font-semibold mb-3">
                About Us
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Who We Are
              </h2>

              <p className="opacity-70 mb-4">
                We are a digital growth platform helping creators, businesses,
                and marketers grow their audience.
              </p>

              <p className="opacity-70">
                Our goal is to provide transparency and scalable growth.
              </p>
            </div>
          </div>
        </GlassSection>

        {/* TRANSPARENCY */}
        <GlassSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl shadow-lg">
                ✓
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transparency & User Safety
            </h2>

            <p className="opacity-70">
              We aim to be transparent in all aspects and keep users safe while
              using our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT CARD */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-500 text-xl mb-4">
                📩
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Data Privacy & Email Usage
              </h3>

              <p className="opacity-70 mb-4">
                We collect your email and basic usage data to improve
                performance and experience.
              </p>

              <p className="opacity-70 mb-4">
                Your email helps with account access and important updates.
              </p>

              <p className="opacity-70">
                You can unsubscribe from marketing emails anytime.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-500 text-xl mb-4">
                🔒
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Account Safety & Platform Compliance
              </h3>

              <p className="opacity-70 mb-4">
                We keep your account safe and never access private messages or
                data.
              </p>

              <p className="dark:text-white text-sm bg-red-100/30 p-3 rounded-lg border border-red-200/30">
                Growth Pilot does not affiliate with Instagram or Meta
                Platforms.
              </p>
            </div>
          </div>
        </GlassSection>

        {/* TEAM */}
        <GlassSection>
          <Team />
        </GlassSection>

      </div>
    </div>
  );
};

export default About;