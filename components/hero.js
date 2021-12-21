import Link from "next/link";
import Button from "./button";
import { motion } from "framer-motion";

function Hero() {
  const container = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 2,
      },
    },
  };



  return (
    <div className="hero lg:min-h-screen  flex-col xl:flex-row flex w-full ">
      {/* Linke Seite */}
      <div className="left-side min-h-[50vh] lg:h-screen w-12/12 flex items-center content-center xl:pr-48 xl:pl-24 p-8 pt-56 flex-wrap ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ y: -30, opacity: 0 }}
        >
          <h1 className="text-white xl:text-7xl lg:text-5xl md:text-3xl text-2xl tracking-light w-full">
            Ich helfe Unternhmen
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-blue-500  to-[#033F73]">
              <br /> die gutes tun, gut auszusehen.
            </span>
          </h1>
        </motion.div>
          <Button href="/about" text="Jetzt kontaktieren" key={"351351"} />
      </div>
      ≈ {/* Rechte Seite */}
      <div className="right-side w-full 2xl:w-8/12 grid grid-cols-2 grid-rows-2  h-[50vh] lg:h-screen text-white xl:text-3xl lg:text-2xl text-base">
        <div
          className={`border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800  group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover  hover:bg-center bg-no-repeat   bg-hero-1 overflow-hidden`}
        >
          <div className="bg-black group-hover:opacity-30 	 group-hover:translate-x--8  w-full h-full transition-all duration-500 ease-in-out "></div>
          <Link href="#">
            <h3 className="cursor-pointer  font-light absolute left-[8%] bottom-[12%] text-transparent  transition-all duration-700 delay-200 ease-in-out group-hover:bottom-[8%] group-hover:text-white">
              Anschauen
            </h3>
          </Link>
          <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-500 delay-200 group-hover:translate-y-8 group-hover:opacity-0">
            Projekte{" "}
          </h3>
        </div>
        <div className="border-solid border-[.5px] relative border-b-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-2 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-500 "></div>
          <Link href="#">
            <h3 className="cursor-pointer   font-light absolute left-[8%] bottom-[12%] text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white">
              Anschauen
            </h3>
          </Link>
          <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-8 group-hover:opacity-0">
            Leistungen
          </h3>
        </div>
        <div className="border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-3 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-500 "></div>
          <Link href="#">
            <h3 className="cursor-pointer  font-light absolute left-[8%] bottom-[12%] text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white ">
              Anschauen
            </h3>
          </Link>
          <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-8 group-hover:opacity-0">
            Über Marvin Aziz
          </h3>
        </div>
        <div className="border-solid border-[.5px] border-b-0 relative border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-4 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-500 "></div>
          <Link href="#">
            <h3 className="cursor-pointer  font-light absolute left-[8%] bottom-[12%] text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white">
              Schreib mir!
            </h3>
          </Link>
          <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-8 group-hover:opacity-0">
            Kontakt
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
