import Head from "next/head";
import Link from "next/link";

function Header() {
  const pageTitle = "Marvin Aziz | Webdev from Berlin";
  const pageDescription = "Website designed by Marvin Aziz";

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pageDescription} />
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap');</style>
      </Head>

      <div className="navbar  p-8 flex justify-between items-center absolute w-full">
        <div className="logo">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_229,h_133/https://marvinaziz.de/wp-content/uploads/2020/07/Logo-White-Trans.png"
            height={80}
            width={80}
          />
        </div>
        <nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 opacity-80 z-20 top-8 right-8 absolute hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
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
