import SidebarProjectModule from "./sidebarProjectModule";
import projects from "../JSON/projects.json"
import Link from "next/link"
import getTimeThisMonth from "../timerApp/helper/getTimeThisMonth"
import timeConvert from "../timerApp/helper/timeConvert"





function AppSidebar({backToMain}) {

  return (
    
      <div className="sidebar w-4/12 bg-stone-800 h-screen py-48 overflow-y-scroll sticky top-0">
      {projects.map((project) => {
        let hours = timeConvert(getTimeThisMonth(project.history))

       return( <SidebarProjectModule key={project.id} href={project.customerImageUrl} project={project.name} meta={hours} customer={project.customer} id={project.id} getTimeThisMonth={getTimeThisMonth} />);

      })}
       
      {backToMain ? <div className="backBtn text-white mx-5 cursor-pointer"><Link href="/timerApp">Zurück zur Übersicht</Link></div> : null}
      </div>
    
  );
}

export default AppSidebar;


