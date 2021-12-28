// Convert Minutes to format hh:mm Std.


export default function timeConvert(n) { // to Hours
    var min = n;
    var hours = Math.floor(min / 60);          
    var minutes = Math.round((min % 60)).toFixed(0);
    minutes = ('0' + minutes).slice(-2)
    return hours + ":" + minutes + " Std.";
    }