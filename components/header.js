import Head from "next/head";
import { useState } from "react";
import useScrollPosition from "../components/customHooks/scrollPosition";
import Menu from "../components/menu";

function Header( {dark, blur=true}) {
  const pageTitle = "Marvin Aziz | Web Development aus Berlin";
  const pageDescription = "Website designed by Marvin Aziz";
  const logoPath = "/Logo/Logo_Marvin_Aziz_White_Blue_Trans.svg";

  const scrollPosition = useScrollPosition();

  const [menuVisible, setMenuVisible] = useState(false);



  return (
    <div className="">
          <Menu visible={menuVisible}  setMenuVisible={setMenuVisible} dark={dark} />

      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pageDescription} />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/Favicon/Favicon_Marvin_Aziz_Blue_Trans.ico"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div
        className={`navbar z-10 2xl:p-8 pr-4 py-4 pl-2 flex  justify-between items-center transition-all duration-300 ease-in-out fixed w-full  ${
          scrollPosition > 60 && blur
            ? "backdrop-filter backdrop-blur-md bg-opacity-30 pt-1 pb-1"
            : null
        }
        ${menuVisible ? "opacity-0" : null}`}
      >
        {/* <div className="absolute top-0 w-screen blur-lg z-30 h-full bg-[rgba(192,192,192,0.01)]"></div> */}
        <div
          className={`logo transition-all duration-300 ease-in-out w-36 md:w-48 lg:w-60 ${
            scrollPosition > 60 ? "scale-75" : null
          }
          `}
        >
          <img src={logoPath} width={270} />
        </div>
        <nav className="relative w-48" onClick={()=>{ setMenuVisible(!menuVisible); } }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 m-auto mr-0 opacity-80 z-20  hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer`}
            fill="none"
            viewBox="0 0 24 24"
            stroke={dark ? "black" : "white"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </nav>
      </div>
    </div>
  );
}

export default Header;
