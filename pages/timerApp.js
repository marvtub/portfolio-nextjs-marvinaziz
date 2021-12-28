import Header from "../components/header"
import AppSidebar from "../components/timerApp/appSidebar"

export default function TimerApp() {
    return (
        <div className="container flex flex-row">
        <Header />
            <AppSidebar backToMain={false} />
            <main className="main-app w-8/12 ">
                {/* main app */}
                <h2 className="text-white p-32 text-4xl">Wähle ein Projekt aus.</h2>
            </main>
            
        </div>
    )
}
