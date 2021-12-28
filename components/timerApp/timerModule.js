import TimeComment from "../timerApp/timeComment";
import MyTimer from "../customHooks/reactTimer";

function TimerModule() {
  return (
    <div className="p-8 border-0 rounded-xl bg-slate-100 w-full flex flex-row">
      <div className="links w-6/12 text-gray-800">
        <h2 className="text-3xl">Zeiterfassung</h2>
        <p className="text-base text-gray-400 py-2">
          Starte hier deine Zeiterfassung für heute
        </p>
        <div className="timer py-6">
          <MyTimer />
        </div>
        {/* <Button href="#" text="Start" dark={true}/> */}
      </div>
      <TimeComment />
    </div>
  );
}

export default TimerModule;
