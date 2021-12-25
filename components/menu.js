
import Link from "next/link";
import menuLinks from "../components/JSON/menuData.json"
import { motion } from "framer-motion"

function Menu({visible, setMenuVisible}) {

const menuSideBar = {
    open: { opacity: 1, x:0, transition:{
        duration: .3,
        staggerChildren: 0.4,
        ease: "easeInOut"
    }},
    closed: { opacity: 0, x:-200}
}

const item = {
    open: { x:0, opacity:1, skewY:0},
    closed: { opacity:0 , skewY:".0952rad"}
}

    return (
        <motion.div
        initial={false}
        animate={visible ? "open" : "closed"}
        variants={menuSideBar}

        >
           <div className={`h-screen z-50 w-screen backdrop-filter backdrop-blur-md bg-opacity-0 absolute transition-all duration-300 ease-in flex ${visible ? "opacity-100   block" : "hidden"}`} >
           <div className="close absolute lg:top-20 top-8 right-8 lg:text-2xl text-xl text-white cursor-pointer" onClick={()=>{setMenuVisible(!visible)}}>SCHLIEßEN</div>
            <div className={`left-side-menu relative flex flex-col xl:w-6/12 py-8 lg:px-36 px-12 w-screen justify-center bg-slate-700`}>
                <ul className="xl:text-7xl text-4xl font-semibold  text-white">
                {menuLinks.map((el) => {
                    if(el.name === 'About' || el.name === 'Impressum'){
                        return
                    }
                    return(
                    <motion.li
                    variants={item}
                    whileHover={{ scale:1.1}}
                     key={el.name} className="py-6 group">
                        <Link href={el.href}>{el.name}</Link>
                    </motion.li>)

                })}
                
                </ul>
                <div className="bottom-box absolute bottom-8 text-4xl text-gray-200 bg-black w-full h-8"></div>
            </div>
           </div>
        </motion.div>
    )
}

export default Menu
