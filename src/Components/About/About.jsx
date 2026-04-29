/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";
import Team from "../Team/Team";

const About = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white flex flex-col gap-20">
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
        className="flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm"
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
            and cohesive digital identity. Every brand is unique, and results
            may vary depending on content quality, consistency, audience
            behavior, and evolving platform trends.
          </p>

          <p className="opacity-70">
            Every account grows differently based on content, consistency, and
            engagement.
          </p>
        </div>

        <div className="flex-1">
          <img src={assets.about_img1} className="rounded-xl w-full" alt="" />
        </div>
      </motion.div>

      {/* WHO WE ARE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <img src={assets.about_img2} className="rounded-xl w-full" alt="" />
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
        className="flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-white/5 p-8 rounded-2xl"
      >
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Why Users Choose Growth Pilot
          </h2>
          <p className="opacity-70">
            People choose Growth Pilot because we make social media growth
            simple, reliable, and results-driven. Our approach focuses on
            authentic engagement, targeted audience growth, and high-quality
            digital solutions that help brands build a strong and lasting online
            presence.
          </p>
          {/* <tr ></tr>           */}
          <br />{" "}
          <span className="text-2xl font-semibold mb-4 ">
            {" "}
            Who Uses Growth Pilot{" "}
          </span>
          <tr></tr>
          <br />
          <p className="opacity-70">
            Growth Pilot is designed for anyone looking to expand their digital
            reach and improve their brand visibility: Content creators aiming to
            increase Instagram engagement and grow a loyal audience Businesses
            seeking USA and international followers to expand their market reach
            Brands and entrepreneurs needing professional web development and
            graphic design services Agencies managing multiple clients and
            scaling their social media performance
          </p>
        </div>

        <div className="flex-1">
          <img src={assets.about_img3} className="rounded-xl w-full" alt="" />
        </div>
      </motion.div>

      <Team />
    </div>
  );
};

export default About;
