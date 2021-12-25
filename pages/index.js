import Header from "../components/header";
import Hero from "../components/hero";


// Inspired by https://www.vovi.studio/


export default function Home() {
  return (
    <div className=" sans">
      <Header />
      <main className="">
        <Hero />
      </main>
    </div>
  );
}
