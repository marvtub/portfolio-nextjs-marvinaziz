import Head from "next/head";

function Header() {
  const pageTitle = "Marvin Aziz | Web Development aus Berlin";
  const pageDescription = "Website designed by Marvin Aziz";
  const logoPath = "/Logo/Logo_Marvin_Aziz_White_Blue_Trans1000x500.svg"

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pageDescription} />
        <link rel="shortcut icon" type="image/x-icon" href="/Favicon/Favicon_Marvin_Aziz_Blue_Trans.ico" />

        <style type="text/css">@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap");</style>
      </Head>

      <div className="navbar z-10 p-8 flex justify-between items-center fixed w-full ">
        <div className="logo w-36 md:w-48 lg:w-60">
          <img
            src={logoPath}
            width={270}
          />
        </div>
        <nav className="relative w-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 m-auto mr-0 opacity-80 z-20  hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
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
