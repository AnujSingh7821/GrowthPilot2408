/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../../assets/assets";
import ServicesCards from "../ServiceCards/ServicesCards";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Social Media Growth",
      description:
        "Build a stronger social media presence with strategic engagement, better reach and consistent growth.",
      icon: assets.social_icon,
      path: "/social-media",
    },
    {
      title: "Graphic Designing",
      description:
        "Creative visual solutions designed to strengthen your brand identity and make your content stand out.",
      icon: assets.marketing_icon,
      path: "/graphic-design",
    },
    {
      title: "Advertising",
      description:
        "Performance-driven digital campaigns created to reach the right audience and generate meaningful results.",
      icon: assets.ads_icon,
      path: "/advertising",
    },
  ];

  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        px-4
        sm:px-12
        lg:px-24
        xl:px-40
        py-20
        sm:py-24
        lg:py-28
        text-gray-700
        dark:text-white
      "
    >
      {/* Light Mode Background */}
      <img
        src={assets.bgImage2}
        alt=""
        className="
          absolute
          -top-96
          -left-72
          -z-10
          pointer-events-none
          dark:hidden
        "
      />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />

            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em]">
              Our Services
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
            How can we help?
          </h2>

          <p
            className="
              mt-5
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              text-gray-500
              dark:text-gray-400
              max-w-2xl
              mx-auto
            "
          >
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-7
            mt-12
            lg:mt-14
          "
        >
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              onClick={() => navigate(service.path)}
              className="cursor-pointer h-full"
            >
              <ServicesCards service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;