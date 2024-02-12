import React from 'react'

import { motion } from 'framer-motion'

import { MdContactMail } from "react-icons/md";
import { useMotionValue, useTransform } from 'framer-motion';


export default function Contact() {
    const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [0.5, 1, 0.5]);
  return (
    <div>

        <div className="mt-20 left-0 right-0 transform flex items-center justify-center">

            <motion.div

                animate={{
                    scale: [1, 1.4, 1, 1.4, 1],
                    rotate: [0, 20, 0, -20, 0]
                    
                    }}
                transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                    }}   
            >
                <MdContactMail className="w-8 h-8 mb-8 mt-8 text-blue-900"/>
                </motion.div>
        </div>
        <div className="flex-col flex items-center justify-center mb-4 space-y-16"> 
            <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    className="bg-gray-200 p-6 rounded-md shadow-md max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p className="text-gray-700">
                    <ul className="flex">
                        <li className="mr-4">
                            <a href="https://www.linkedin.com/company/leap-brand/?viewAsMember=true" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li className="mr-4">
                            <a href="https://www.instagram.com/leapbrands/" target="_blank" rel="noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/leapbrands" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                </ul>
                
                </p>
            </motion.div>
        </div>
        
    </div>
  )
}
