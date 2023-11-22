//your JS code here. If required.

function updateTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var date = currentTime.getDate();
	var month = currentTime.getMonth() + 1;
	var year = currentTime.getFullYear();
	
	hours = (hours<10) ? "0" + hours : hours;
	minutes = (minutes<10) ? "0" + minutes : minutes;
	seconds = (seconds<10) ? "0" + seconds : seconds;
	date = (date<10) ? "0" + date : date;
	month = (month<10) ? "0" + month : month;

	var currentDateTime = date+"/"+month+"/"+year+" "+hours+":"+minutes+":"+seconds;

	document.getElementById("timer").innerHTML = currentDateTime;
}
setInterval(updateTime, 1000);


