import Button from "../components/button";
import Header from "../components/header";

export default function About() {
    return (
        <div className="bg-black h-screen">
        <Header />
        <div className="p-48">

            <h1 className="text-xl">Hi!</h1>
            <Button href="/" text="Zurück" />
        </div>
        </div>
    )
}
