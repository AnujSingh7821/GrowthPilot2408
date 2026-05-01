/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";
import Team from "../Team/Team";

const About = () => {
  return (
    <div
      className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white flex flex-col gap-20"
      style={{
        backgroundImage: `url(${assets.bgimg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col gap-20">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-block px-4 py-1 bg-primary/10 text-[#0c44ee] rounded-full text-sm mb-4">
            Welcome to 𝗚𝗿𝗼𝘄𝘁𝗵 𝗣𝗶𝗹𝗼𝘁
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            𝗔𝗯𝗼𝘂𝘁 <span className="text-[#211bc6]">𝗚𝗿𝗼𝘄𝘁𝗵𝗣𝗶𝗹𝗼𝘁</span>
          </h1>

          <p className="opacity-70">
            We help you grow your Instagram in a smart and safe way.
          </p>
        </motion.div>

        {/* OUR APPROACH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center gap-10 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-white/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500"
        >
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              Our Approach to Growth
            </h2>

            <p className="opacity-70 mb-4 text-xl font-semibold">
              At Growth Pilot, we believe in authentic and sustainable growth
              strategies.
            </p>

            <p className="opacity-70">
              Every account grows differently based on content, consistency, and
              engagement.
            </p>
          </div>

          <div className="flex-1">
            <img src={assets.about_img2} className="rounded-xl w-full hover:scale-105 transition duration-500" alt="" />
          </div>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <img src={assets.about_img1} className="rounded-xl w-full hover:scale-105 transition duration-500" alt="" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

            <p className="opacity-70 mb-4">
              We are a digital growth platform helping creators, businesses, and
              marketers grow their audience.
            </p>

            <p className="opacity-70">
              Our goal is to provide transparency and scalable growth.
            </p>
          </div>
        </motion.div>

        {/* NEW SECTION (Transparency & Safety) */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="flex flex-col gap-12"
>
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
        ✓
      </div>
    </div>

    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      Transparency & User Safety
    </h2>

    <p className="opacity-70">
      We aim to be transparent in all aspects and keep users safe while using our platform.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* LEFT CARD */}
    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-500 text-xl mb-4">
        📩
      </div>

      <h3 className="text-xl font-semibold mb-4">
        Data Privacy & Email Usage
      </h3>

      <p className="opacity-70 mb-4">
        We collect your email and basic usage data to improve performance and experience.
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
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-500 text-xl mb-4">
        🔒
      </div>

      <h3 className="text-xl font-semibold mb-4">
        Account Safety & Platform Compliance
      </h3>

      <p className="opacity-70 mb-4">
        We keep your account safe and never access private messages or data.
      </p>

      <p className="text-red-400 text-sm bg-red-100/30 p-3 rounded-lg">
        Growth Pilot does not affiliate with Instagram or Meta Platforms.
      </p>
    </div>

  </div>
</motion.div>

        <Team />

      </div>
    </div>
  );
};

export default About;