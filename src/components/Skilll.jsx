
import { motion } from "framer-motion";
import data from "../../public/data.json";
import React from "react";


const container = {
  hidden: { opacity: 0, scale: 1, when: 'afterChildren',},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
        when: 'beforeChildren',
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const child ={
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1},
}
 
 const Skilll = () => {
   return (
    <motion.div
    client:visible
    variants={container}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.6 }}
  >
  {data.items.map((item,index)=>(
  <motion.div key={index} variants={child}>
      <div class="skill flex flex-col justify-around text-center  w-[48%] md:w-[25%] h-[142px] mb-6">
              <p>{item.title}</p>
          </div>
  </motion.div>))}
  
  </motion.div>
   )
 }
 
 export default Skilll


