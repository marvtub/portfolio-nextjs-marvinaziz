import { useRouter } from "next/router";
import Header from "../../components/header";
import AppSidebar from "../../components/timerApp/appSidebar";
import projects from "../../components/JSON/projects";
import ErrorPage from "../404";
import DataModuleSmall from "../../components/timerApp/dataModuleSmall";
import TimerModule from "../../components/timerApp/timerModule";
import HistoryTable from "../../components/timerApp/historyTable";
import getTimeThisMonth from "../../components/timerApp/helper/getTimeThisMonth"

const ProjectPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  let project = projects.find((p) => p.id === pid);
  let timeThisMonth = getTimeThisMonth(project?.history);

  if (!router.isFallback && !project?.id) {
    return <ErrorPage statusCode={404} hidden={true} />;
  }

  return (
    <div className="project-page bg-white ">
      <Header dark={true} blur={false} />
      <div className="main flex flex-row">
        <AppSidebar backToMain={true} />
        <div className="project container px-16 pt-16 w-8/12 overflow-y-scroll ">
          <h1 className="text-slate-800 text-4xl">{project?.name}</h1>
          <div className="meta-details flex flex-row py-2">
            <p className="text-slate-500 text-base px-1">
              Kunde: {project?.customer}{" "}
            </p>
            <p className="text-slate-500 text-base px-1">
              Stundensatz: {project?.hourlyRate}{" "}
            </p>
            <p className="text-slate-500 text-base px-1">
              {" "}
              Monatsziel: {project?.timeGoal} Stunden{" "}
            </p>
          </div>
          <DataModuleSmall
            hourlyRate={project.hourlyRate}
            timeGoal={project.timeGoal}
            timeWorked={timeThisMonth}
          />
          <TimerModule />
          <HistoryTable history={project.history} hourlyRate={project.hourlyRate} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;


