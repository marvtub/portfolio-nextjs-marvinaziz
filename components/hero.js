import Link from "next/link";
import Button from "./button";

function Hero() {
  return (
    <div className="hero h-screen  pl-48 flex w-full ">
    {/* Linke Seite */}
      <div className="left-side w-6/12 flex items-center content-center pr-48 flex-row flex-wrap ">
        <h1 className="text-white text-6xl tracking-light w-full">
          Ich helfe Unternhmen
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-purple-500 to-blue-600"><br/> die gutes tun, gut auszusehen.</span>
        </h1>
        <Button href="#" text="Jetzt kontaktieren" />
      </div>
      {/* Rechte Seite */}
      <div className="right-side w-6/12 grid grid-cols-2 grid-rows-2  h-screen text-white">
          <div className="border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800  group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover  hover:bg-center bg-no-repeat bg-[url('/pexels-luis-quintero-2471234.jpg')] overflow-hidden">
            <div className="bg-black group-hover:opacity-30 	 group-hover:translate-x--8  w-full h-full transition-all duration-300 ease-in-out "></div>
            <Link href="#"><h3 className="cursor-pointer text-xl font-light absolute left-4 bottom-10 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-4 group-hover:text-white">Anschauen</h3></Link>
            <h3 className="text-xl font-light absolute bottom-4 left-4  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Projekte</h3>
          </div>
          <div className="border-solid border-[.5px] relative border-b-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-[url('/pexels-erik-mclean-9727533.jpg')] overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer  text-xl font-light absolute left-4 bottom-10 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-4 group-hover:text-white">Anschauen</h3></Link>
            <h3 className="text-xl font-light absolute bottom-4 left-4  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Leistungen</h3>
          </div>
          <div className="border-solid border-[.5px] relative border-b-0 border-r-0  border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-[url('/pexels-alexander-ant-4585184.jpg')] overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer text-xl font-light absolute left-4 bottom-10 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-4 group-hover:text-white ">Anschauen</h3></Link>
            <h3 className="text-xl font-light absolute bottom-4 left-4  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Über Marvin Aziz</h3>
          </div>
          <div className="border-solid border-[.5px] border-b-0 relative border-slate-800 group bg-black hover:border-black delay-100 transition-all duration-500 ease-in-out bg-cover hover:bg-center bg-no-repeat  bg-[url('/pexels-zaksheuskaya-1616403.jpg')] overflow-hidden">
          <div className="bg-black group-hover:bg-opacity-20 group-hover:translate-x--8  w-full h-full transition-all duration-300 "></div>
            <Link href="#"><h3 className="cursor-pointer text-xl font-light absolute left-4 bottom-10 text-transparent  transition-all duration-700 delay-200 group-hover:bottom-4 group-hover:text-white">Schreib mir!</h3></Link>
            <h3 className="text-xl font-light absolute bottom-4 left-4  transition-all duration-700 delay-200 group-hover:translate-y-16 group-hover:opacity-0">Kontakt</h3>
          </div>
          
      </div>
    </div>
  );
}

export default Hero;

