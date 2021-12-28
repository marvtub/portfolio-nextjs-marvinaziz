import timeConvert from "./helper/timeConvert";

function HistoryTable({ history, hourlyRate }) {


  return (
    <div className="history my-4 p-8 bg-slate-100 rounded-xl">
      <h1 className=" text-black">History</h1>
      {history.map((e) => {
        let moneyEarned = (hourlyRate * (e.time / 60 / 60)).toFixed(2)
        let timeSpent = timeConvert(e.time/60)
        return (
          <div className="history entry py-4 border-slate-500 border-2 my-4 px-4 rounded-lg border-opacity-50 flex flex-row justify-between" key={e.date}>
            <h4 className="text-slate-800 text-xl">{e.date}</h4>
            <p className="text-blue-500">{e.comment}</p>
            <p className="timespent text-slate-600 text-lg">{timeSpent}</p>
            <p className="earned text-blue-900 font-bold text-xl">{moneyEarned} €</p>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryTable;
