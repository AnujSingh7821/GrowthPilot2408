/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "motion/react";

const ServicesCards = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        h-full
        min-h-77.5
        rounded-[26px]
        border
        border-gray-200
        dark:border-white/10
        bg-white
        dark:bg-[#111827]
        p-7
        sm:p-8
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        hover:border-primary/40
        hover:shadow-[0_25px_70px_rgba(79,70,229,0.18)]
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
          group-hover:w-full
          h-0.5
          bg-linear-to-r
          from-transparent
          via-primary
          to-transparent
          transition-all
          duration-500
        "
      />

      {/* SMALL GLOW */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-48
          h-48
          rounded-full
          bg-primary/10
          blur-[70px]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* ICON */}
        <div
          className="
            w-16
            h-16
            flex
            items-center
            justify-center
            rounded-2xl
            bg-gray-100
            dark:bg-[#1c2738]
            border
            border-gray-200
            dark:border-white/10
            mb-7
            group-hover:bg-primary/10
            group-hover:border-primary/30
            group-hover:scale-105
            transition-all
            duration-500
          "
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            text-xl
            sm:text-[22px]
            font-semibold
            tracking-tight
            text-gray-900
            dark:text-white
            mb-3
            group-hover:text-primary
            transition-colors
            duration-300
          "
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            sm:text-[15px]
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          {service.description}
        </p>

        {/* LINK */}
        <div
          className="
            flex
            items-center
            gap-2
            mt-auto
            pt-7
            text-sm
            font-semibold
            text-primary
          "
        >
          <span>Explore Service</span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1.5
            "
          >
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCards;