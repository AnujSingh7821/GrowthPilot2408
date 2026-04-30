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
              strategies. We prioritize real engagement, quality audience
              targeting, and long-term results over short-term gains. In addition
              to social media growth, we provide professional web development and
              creative graphic design services to help businesses build a strong
              and cohesive digital identity.
            </p>

            <p className="opacity-70">
              Every account grows differently based on content, consistency, and
              engagement.
            </p>
          </div>

          <div className="flex-1">
            <img src={assets.about_img1} className="rounded-xl w-full hover:scale-105 transition duration-500" alt="" />
          </div>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <img src={assets.about_img2} className="rounded-xl w-full hover:scale-105 transition duration-500" alt="" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

            <p className="opacity-70 mb-4">
              We are a digital growth platform helping creators, businesses, and
              marketers grow their audience using data-driven strategies.
            </p>

            <p className="opacity-70">
              Our goal is to provide transparency, long-term engagement, and
              scalable growth solutions.
            </p>
          </div>
        </motion.div>

        {/* TOOLS / SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="opacity-80 mb-10">
            We support your growth through multiple solutions.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center gap-10 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all duration-500"
        >
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              Why Users Choose Growth Pilot
            </h2>

            <p className="opacity-70">
              People choose Growth Pilot because we make social media growth
              simple, reliable, and results-driven.
            </p>

            <br />

            <span className="text-2xl font-semibold mb-4">
              Who Uses Growth Pilot
            </span>

            <br />

            <p className="opacity-70">
              Growth Pilot is designed for anyone looking to expand their digital
              reach and improve their brand visibility.
            </p>
          </div>

          <div className="flex-1">
            <img src={assets.about_img3} className="rounded-xl w-full hover:scale-105 transition duration-500" alt="" />
          </div>
        </motion.div>

        <Team />

      </div>
    </div>
  );
};

export default About;