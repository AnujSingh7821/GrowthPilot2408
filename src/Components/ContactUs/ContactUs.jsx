/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from '../Title/Title';
import assets from '../../assets/assets';
import toast from 'react-hot-toast';
import { motion } from "motion/react";

const ContactUs = () => {
   
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
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
        toast.success("Thank You For Your Submission !!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ straggerchildren:0.2 }}
      viewport={{ once: false }} 
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

      <Title 
        title='Reach Out To Us' 
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form  
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:false}}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        
        {/* NAME */}
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input 
              type="text" 
              name="name" 
              placeholder='Enter Your Name' 
              className='w-full p-3 text-sm outline-none' 
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <p className='mb-2 text-sm font-medium'>Email ID</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input 
              type="email" 
              name="email" 
              placeholder='Enter Your Email' 
              className='w-full p-3 text-sm outline-none' 
              required 
            />
          </div>
        </div>

        {/* SERVICE DROPDOWN */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Select Service</p>

          <div className='flex rounded-lg border border-gray-300 dark:border-gray-600'>
            <select
              name="service"
              required
              className='w-full p-3 text-sm outline-none bg-transparent'
            >
              <option value="">Select a Service</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Web Development">Web Development</option>
              <option value="Advertising">Advertising</option>
            </select>
          </div>
        </div>

        {/* MESSAGE */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea 
            rows={8} 
            name="message" 
            placeholder='Enter Your Message' 
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' 
            required
          />
        </div>

        {/* SUBMIT */}
        <button 
          type="submit" 
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          Submit 
        </button>

      </motion.form>
    </motion.div>
  );
}

export default ContactUs;