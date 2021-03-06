import Link from "next/link";
import Button from "./button";

function Hero() {





  return (
    <div className="hero lg:h-screen  flex-col xl:flex-row flex w-full ">
    {/* Linke Seite */}
      <div className="left-side h-[50vh] lg:h-screen w-12/12 flex items-center content-center xl:pr-48 xl:pl-24 p-8 pt-56 flex-wrap ">
        <h1 className="text-white xl:text-7xl lg:text-5xl md:text-3xl text-2xl tracking-light w-full">
          Ich helfe Unternhmen
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-blue-500  to-[#033F73]"><br/> die gutes tun, gut auszusehen.</span>
        </h1>
        <Button href="#" text="Jetzt kontaktieren" />
      </div>
      {/* Rechte Seite */}
      <div className="right-side w-full 2xl:w-8/12 grid grid-cols-2 grid-rows-2  h-[50vh] lg:h-screen text-white xl:text-3xl lg:text-2xl text-xl">
          <div className={`border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800  group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover  hover:bg-center bg-no-repeat   bg-hero-1 overflow-hidden`}>
            <div className="bg-black group-hover:opacity-30 	 group-hover:translate-x--8  w-full h-full transition-all duration-300 ease-in-out "></div>
            <Link href="#"><h3 className="cursor-pointer  font-light absolute left-[8%] bottom-16 text-transparent  transition-all duration-700 delay-200 ease-in-out group-hover:bottom-[8%] group-hover:text-white">Anschauen</h3></Link>
            <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-500 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Projekte </h3>
          </div>
          <div className="border-solid border-[.5px] relative border-b-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-2 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer   font-light absolute left-[8%] bottom-16 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white">Anschauen</h3></Link>
            <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Leistungen</h3>
          </div>
          <div className="border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-3 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer  font-light absolute left-[8%] bottom-16 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white ">Anschauen</h3></Link>
            <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">??ber Marvin Aziz</h3>
          </div>
          <div className="border-solid border-[.5px] border-b-0 relative border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-hero-4 overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer  font-light absolute left-[8%] bottom-16 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-[8%] group-hover:text-white">Schreib mir!</h3></Link>
            <h3 className=" font-light absolute bottom-[8%] left-[8%]  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Kontakt</h3>
          </div>
          
      </div>
    </div>
  );
}

export default Hero;

