
import { motion } from "framer-motion";
import data from "../data.json";



const container = {
  hidden: { opacity: 0, scale: 1, when: 'afterChildren', },
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

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const Skilll = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      <div className=" flex flex-wrap justify-center content-center gap-3 " >
        {data.items.map((item, index) => (
          <motion.div key={index} variants={child}>
            <div className=" shadow-xl rounded-xl flex flex-col justify-around text-center h-[142px] w-[142px] mb-6 mx-auto hover:skew-y-3 hover:transition-all duration-500">
            <div className=" h-[80%]">
                <img src={item.src} alt={item.title} className="max-w-full max-h-full bg-contain bg-no-repeat mx-auto mb-2" />
                </div>
              <p>{item.title}</p>
            </div>
          </motion.div>))}
      </div>
    </motion.div>
  )
}

export default Skilll


