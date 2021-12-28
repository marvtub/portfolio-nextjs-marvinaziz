import Link from "next/link"

export default function Custom404({hidden = false}) {


    
    return (
        <div className={`${hidden ? "hidden" : null}`}>
            <div className="404 bg-black text-white flex items-center justify-center flex-col  h-screen">
        <h1 className=" text-4xl p-8">Seite nicht gefunden</h1>
        <div className="border-2 border-white rounded-lg cursor-pointer border-solid p-4">
          <Link href="/timerApp">Zurück zur Übersicht</Link>
        </div>
      </div>
        </div>
    )
}

