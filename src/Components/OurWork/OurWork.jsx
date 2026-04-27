/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../Title/Title";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const OurWork = () => {

    const navigate = useNavigate();

    const workData=[
        {
            title:"Web Development",
            description : "we help you to create powerful websites built to grow your business..",
            icon : assets.webd2,
            path: "/web-development"
        },
        {
            title:"Instagram Dashboard Management",
            description : "we help you to build a strong social media presence and engage with your audience",
            icon : assets.instaimg,
            path: "/social-media"
        },
        {
            title:"Graphical Promotion",
            description : "we help you to execute your plan and deliver results.",
            icon : assets.graphics,
            path: "/graphic-design"
        },
    ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ straggerchildren:0.2 }}
      viewport={{ once: false }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {
            workData.map((work,index)=>(
            <motion.div 
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:index * 0.2}}
              viewport={{once:false}}
              key={index}
              onClick={() => navigate(work.path)}   // 👈 ONLY CHANGE
              className="hover:scale-102 duration-500 transition-all cursor-pointer"
            >
                <img src={work.icon} className="w-full rounded-xl" alt="" />
                <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;