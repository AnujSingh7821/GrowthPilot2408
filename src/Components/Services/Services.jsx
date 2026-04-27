/* eslint-disable no-unused-vars */
 
import React from 'react';
import assets from '../../assets/assets';
import Title from "../Title/Title"
import ServicesCards from '../ServiceCards/ServicesCards';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate = useNavigate();

    const servicesData =[
        {
            title : "Advertising",
            description : " we turn bold ideas into powerful digital solutions that connect, engage...",
            icon : assets.ads_icon,
            path: "/advertising"
        },
        {
            title : "Graphic Designing",
            description : " we help you to execute your plan and deliver results.",
            icon : assets.marketing_icon,
            path: "/graphic-design"
        },
        {
            title : "Web Development",
            description : " we help you to create powerful websites built to grow your business. ",
            icon : assets.content_icon,
            path: "/web-development"
        },
        {
            title : "Social Media Marketing",
            description : " we help you to build a strong social media presence and engage with your audience",
            icon : assets.social_icon,
            path: "/social-media"
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      transition={{ straggerchildren:0.2 }}
      viewport={{ once: false }}
      id='process'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 1g:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

    <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/> 

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <div key={index} onClick={() => navigate(service.path)} className="cursor-pointer">
                <ServicesCards service={service} index={index} />
            </div>
        ))}
    </div>
      
    </motion.div>
  );
}

export default Services;