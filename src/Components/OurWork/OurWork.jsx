/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../Title/Title";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const workData = [
    {
      title: "Web Development",
      description:
        "We help you create powerful websites built to grow your business.",
      icon: assets.webd2,
      path: "/web-development",
      btn: "View Web Development",
    },
    {
      title: "Instagram Dashboard Management",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.instaimg,
      path: "/social-media",
      btn: "View Social Media",
    },
    {
      title: "Graphical Promotion",
      description:
        "We help you execute your creative plan and deliver powerful visual results.",
      icon: assets.graphics,
      path: "/graphic-design",
      btn: "View Graphic Design",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false }}
      id="our-work"
      className="flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: false }}
            className={`flex flex-col ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8 lg:gap-14 bg-white dark:bg-gray-900/60 rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-1/2 overflow-hidden rounded-2xl"
            >
              <img
                src={work.icon}
                className="w-full rounded-2xl object-cover"
                alt={work.title}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 !== 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              {/* <span className="text-sm text-primary font-semibold mb-3">
                0{index + 1}
              </span> */}

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {work.title}
              </h3>

              <p className="text-sm sm:text-base opacity-70 mb-7 leading-7">
                {work.description}
              </p>

              <button
                onClick={() => navigate(work.path)}
                className="group relative overflow-hidden bg-primary text-white border border-primary px-6 py-3 rounded-full font-medium cursor-pointer transition-all duration-500"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
                  {work.btn}
                </span>

                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
