/* eslint-disable no-unused-vars */
import React from 'react';
import assets from '../../assets/assets';
import { motion } from "motion/react";
import toast from 'react-hot-toast';


const Footer = ({theme}) => {


const onSubmit1 = async (event) => {

    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    formData.append("access_key", "35c55bc9-95e3-48ac-b01a-c45ffb63454b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Thank You For Your Submission !!")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Thank You For Your Submission !!")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
  }

  return (
    <motion.div 
    initial ={{opacity:0,y:50}}
whileInView ={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:false}}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

      {/* footer top */}

      <div className='flex justify-between lg:item-center max-lg:flex-col gap-10'>
      
        <motion.div 
        initial={{opacity:0,x:-30}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:false}}
        className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={theme === 'dark' ? assets.logoBlack1 :assets.logowhite1} className='w-32 sm:w-44' alt="" />
            <p className='max-w-md'>From strategy to execution, We craft digital solution that move your business forward .</p>

            <ul className='flex gap-8'>
                <li>
                    <a className='hover:text-primary' href="#">Home</a>
                </li>
                <li>
                    <a className='hover:text-primary' href="#process">Process</a>
                </li>
                <li>
                    <a className='hover:text-primary' href="#our-work">Our Work</a>
                </li>
                <li>
                    <a className='hover:text-primary' href="#contact-us">Contact US</a>
                </li>
            </ul>
        </motion.div>

        <motion.div 
        initial={{opacity:0,x:30}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6,delay:0.3}}
viewport={{once:false}}
        className='text-gray-600 dark:text-gray-400'>
            <h3 className='font-semibold'>Subscribe to our newsletter</h3>
            <p className='text-sm mt-2 mb-6'>the latest news,articles and resources sent to your inbox weekly</p>
            <motion.form  
  initial ={{opacity:0,y:30}}
  whileInView ={{opacity:1,y:0}}
  transition={{duration:0.5,delay:0.4}}
  viewport={{once:false}}
  onSubmit={onSubmit1} 
  className='w-full max-w-md mt-4'
>

  <div className='flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800'>

    <div className='flex items-center px-3'>
      <img src={assets.email_icon} alt="" className='h-8 w-8 opacity-70' />
    </div>

    <input 
      type="email" 
      name="email" 
      placeholder='Enter your email' 
      className='w-full px-2 py-3 text-sm outline-none bg-transparent'
      required 
    />

    <button 
      type="submit"
      className='bg-primary text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition'
    >
      Subscribe
    </button>

  </div>

</motion.form>
            
        </motion.div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* footer bottom */}

      <motion.div
      initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.5,delay:0.4}}
viewport={{once:false}}
      className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
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
