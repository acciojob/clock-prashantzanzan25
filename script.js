//your JS code here. If required.
function updateTimer() {
	const timerElement = document.getElementById('timer');
	const now = new Date();
	
	const options = { 
		weekday: 'long', 
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric', 
	    hour: '2-digit', 
	    minute: '2-digit', 
	    second: '2-digit', 
	    timeZoneName: 'short' 
	};

	const formattedTime = now.toLocaleDateString('en-US', options);

	timerElement.textContent = formattedTime;
}

updateTimer();

setInterval(updateTimer, 1000);

