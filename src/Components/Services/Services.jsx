/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../../assets/assets";
import Title from "../Title/Title";
import ServicesCards from "../ServiceCards/ServicesCards";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Social Media Growth",
      description:
        "We help you build a strong social media presence, improve engagement and reach the right audience.",
      icon: assets.social_icon,
      path: "/social-media",
    },

    {
      title: "Graphic Designing",
      description:
        "We create visually impactful designs that strengthen your brand identity and make your content stand out.",
      icon: assets.marketing_icon,
      path: "/graphic-design",
    },

    {
      title: "SEO Optimization",
      description:
        "We improve your website visibility, search rankings and organic traffic with result-driven SEO strategies.",
      icon: assets.content_icon,
      path: "/seo-optimization",
    },

    {
      title: "Advertising",
      description:
        "We create targeted digital advertising campaigns designed to reach, engage and convert the right audience.",
      icon: assets.ads_icon,
      path: "/advertising",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false }}
      id="process"
      className="
        relative
        flex
        flex-col
        items-center
        gap-7
        px-4
        sm:px-12
        lg:px-24
        xl:px-40
        pt-30
        pb-24
        text-gray-700
        dark:text-white
      "
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="
          absolute
          -top-110
          -left-70
          -z-1
          dark:hidden
        "
      />

      <Title
        title="How can we help?"
        desc="From growth and creativity to visibility and advertising, we build digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)}
            className="cursor-pointer"
          >
            <ServicesCards service={service} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;