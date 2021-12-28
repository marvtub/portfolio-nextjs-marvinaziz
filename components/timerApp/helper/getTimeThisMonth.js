export default function getTimeThisMonth(history) {
    // nehme History und schieße Zeit in diesem Monat zurück in minuten
    let today = new Date();
    let timeSum = 0;
  
    history?.forEach((day) => {
      let dayDate = new Date(day.date);
      if (dayDate.getMonth() == today.getMonth()) {
        timeSum += day.time;
      }
    });
  
    let minutes = (timeSum / 60).toFixed(5);
  
    // let hours = minutes / 60;
  
    return minutes;
  }
  