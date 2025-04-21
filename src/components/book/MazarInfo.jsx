'use client'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
export default function MazarInfo() {
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }} // Initial animation state (faded and shifted left)
      whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        // type: 'spring', // Using spring animation for smooth motion
        bounce: 0.2, // Small bounce effect for the animation
      }}
      className={`w-full MazarInfo`}>
      <Image src={logo} alt="Wathiq" className="img-logo" />
      <h2> تواصل الآن مع فريق مبيعات واثق</h2>
      <p> عرفنا أكثر عن مشروعك لمساعدتك </p>
    </motion.div>
  );
}
