/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import assets from "../../assets/assets";

const About = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white flex flex-col gap-20">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
          Welcome to GrowthPilot
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About <span className="text-primary">GrowthPilot</span>
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

          <p className="opacity-70 mb-4">
            We focus on honest, organic growth that follows platform rules.
            We provide insights, tools, and strategies that help users
            understand and improve their performance.
          </p>

          <p className="opacity-70">
            Every account grows differently based on content, consistency,
            and engagement.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={assets.about_img1}
            className="rounded-xl w-full"
            alt=""
          />
        </div>
      </motion.div>

      {/* WHO WE ARE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <img
            src={assets.about_img2}
            className="rounded-xl w-full"
            alt=""
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

          <p className="opacity-70 mb-4">
            We are a digital growth platform helping creators, businesses,
            and marketers grow their audience using data-driven strategies.
          </p>

          <p className="opacity-70">
            Our goal is to provide transparency, long-term engagement,
            and scalable growth solutions.
          </p>
        </div>
      </motion.div>

      {/* TOOLS / SERVICES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Tools, Services & Resources
        </h2>

        <p className="opacity-70 mb-10">
          We support your growth through multiple solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Free Tools",
              desc: "Analyze and track your growth with our free tools.",
            },
            {
              title: "Paid Services",
              desc: "Premium growth services to scale faster.",
            },
            {
              title: "Learning Resources",
              desc: "Guides, tips, and strategies to grow smarter.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-white/5 p-8 rounded-2xl"
      >
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

          <p className="opacity-70">
            Our mission is to help users grow organically and build
            meaningful engagement while staying compliant with platform rules.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={assets.about_img3}
            className="rounded-xl w-full"
            alt=""
          />
        </div>
      </motion.div>

    </div>
  );
};

export default About;