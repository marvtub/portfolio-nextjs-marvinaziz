import Link from "next/link";
import {motion } from 'framer-motion'

function Button(props) {

    const item = {
        hidden: { opacity: 0 , scale:0.95},
        show: {
          opacity: 1,
          scale:1,
          transition: {
            delay: .4,
            duration: 1
          },
        },
      };


  return (
    <motion.div variants={item} initial="hidden" animate="show">

    <Link key={props.text} href={props.href}>
      <div className="text-sm xl:text-lg cursor-pointer my-6 lg:my-14 text-center  text-white border-solid border-[1px] border-white rounded-3xl lg:px-12 lg:py-4 px-8 py-3 w-max">
        {props.text}
      </div>
    </Link>
    </motion.div>
  );
}

export default Button;
