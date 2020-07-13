var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var rightNow = today.toLocaleDateString("en-US", options);
// document.write(" " + rightNow);
document.getElementById("currentDateArea").innerHTML = rightNow;
