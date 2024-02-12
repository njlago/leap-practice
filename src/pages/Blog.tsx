import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BsChatSquareText } from 'react-icons/bs';

export default function Blog() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [0.5, 1, 0.5]);

  return (
    <div>
      <div className="mt-20 left-0 right-0 transform flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.4, 1, 1.4, 1],
            rotate: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 1.4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <BsChatSquareText className="w-8 h-8 mb-8 mt-8 text-blue-900" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center mb-4 space-y-16">
        
        <motion.div
          layout
          drag="x"
          style={{ x, scale }}
          dragConstraints={{ left: -400, right: 400 }}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className="bg-gray-200 p-6 rounded-md shadow-md max-w-md"
        >
          <h2 className="text-2xl font-bold">Blog Post #1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit, a cum eius quasi deserunt ex
            nemo tenetur soluta sequi dolores, voluptate ipsa corrupti velit ad sapiente, labore repudiandae? Quo.
          </p>
        </motion.div>

        <motion.div
          layout
          drag="x"
          style={{ x, scale }}
          dragConstraints={{ left: -400, right: 400 }}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className="bg-gray-200 p-6 rounded-md shadow-md max-w-md"
        >
          <h2 className="text-2xl font-bold">Blog Post #2</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit, a cum eius quasi deserunt ex
            nemo tenetur soluta sequi dolores, voluptate ipsa corrupti velit ad sapiente, labore repudiandae? Quo.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
