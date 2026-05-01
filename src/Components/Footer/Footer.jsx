/* eslint-disable no-unused-vars */
import React from 'react';
import assets from '../../assets/assets';
import { motion } from "motion/react";

const Footer = ({theme}) => {

  return (
    <motion.div 
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
      viewport={{once:false}}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* footer top */}
      <div className='flex justify-between lg:item-center max-lg:flex-col gap-10'>
      
        {/* LEFT */}
        <motion.div 
          initial={{opacity:0,x:-30}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,delay:0.2}}
          viewport={{once:false}}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
        >
          <img 
            src={theme === 'dark' ? assets.logoBlack1 : assets.logowhite1} 
            className='w-32 sm:w-44' 
            alt="" 
          />

          <p className='max-w-md'>
            From strategy to execution, We craft digital solution that move your business forward.
          </p>

          <ul className='flex gap-8'>
            <li><a className='hover:text-primary' href="#">Home</a></li>
            <li><a className='hover:text-primary' href="#process">Process</a></li>
            <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
            <li><a className='hover:text-primary' href="#contact-us">Contact US</a></li>
          </ul>
        </motion.div>

        {/* RIGHT - WHATSAPP JOIN */}
        <motion.div 
          initial={{opacity:0,x:30}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,delay:0.3}}
          viewport={{once:false}}
          className='text-gray-600 dark:text-gray-400'
        >
          <h3 className='font-semibold'>Join Our Community</h3>

          <p className='text-sm mt-2 mb-6'>
            Get updates, offers & connect with us directly on WhatsApp.
          </p>

          <motion.div  
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.4}}
            viewport={{once:false}}
            className='w-full max-w-md mt-4'
          >

            <div className='flex items-center justify-between border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-2'>

              <div className='flex items-center gap-2 px-2'>
                <img src={assets.whatsapp_icon1} alt="" className='h-10 w-10' />
                <p className='text-sm'>Join us on WhatsApp</p>
              </div>

              <a 
                href="https://wa.me/919664145546"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-primary text-white px-5 py-2 text-sm font-medium rounded-md hover:opacity-90 transition'
              >
                Join Now
              </a>

            </div>

          </motion.div>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* footer bottom */}
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:false}}
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright 2026 © Growth_Pilot ALL Right Reserved.</p>

        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>

    </motion.div>
  );
}

export default Footer;