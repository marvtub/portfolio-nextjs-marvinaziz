



function DataModuleSmall({ hourlyRate, timeGoal, timeWorked }) {

    let hoursWorked = timeConvert(timeWorked)
    let moneyEarned = moneyConvert(timeWorked, hourlyRate)
    let timeTill = convertTimeTill(timeWorked, timeGoal)

  return (
    <div className="flex flex-row space-x-4 py-8">
      <div className="p-4 bg-slate-100 rounded-xl w-2/6 flex flex-col justify-center items-center">
        <h3 className="text-4xl py-1">{hoursWorked}</h3>
        <h4>Diesen Monat</h4>
      </div>
      <div className="p-4 bg-slate-100 rounded-xl w-2/6 flex flex-col justify-center items-center">
        <h3 className="text-4xl py-1">{moneyEarned}</h3>
        <h4>Verdienst diesen Monat</h4>
      </div>
      <div className="p-4 bg-slate-100 rounded-xl w-2/6 flex flex-col justify-center items-center">
        <h3 className="text-4xl py-1">{timeTill}</h3>
        <h4>Bis zum Monatsziel</h4>
      </div>
    </div>
  );
}

export default DataModuleSmall;


function timeConvert(n) { // to Hours
    var min = n;
    var hours = Math.floor(min / 60);          
    var minutes = Math.round((min % 60)).toFixed(0);
    minutes = ('0' + minutes).slice(-2)
    return hours + ":" + minutes + " Std.";
    }


    function moneyConvert(n, hourlyRate){ // to EUR
        var rate = hourlyRate;
        var moneyEarned = (n/60) * rate;
        return moneyEarned.toFixed(2) + " €";
    }

    function convertTimeTill(n, goal){ // to tillHours

        // console.log("Minuten: ", n, "| Ziel: ", goal)
        var goalMin = goal * 60;
        var timeTill = goalMin-n;
        // console.log("Minuten-Ziel: ", goalMin, "| Zeit bis dahin: ", timeTill) // min
        timeTill = timeConvert(timeTill);

        return timeTill;
    }