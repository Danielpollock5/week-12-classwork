
function time(i){
// this function will make the seconds have a 0 in front of it
	if (i < 10) {
		i = "0" + i
	}
	//this will stop the function once its past 10 seconds
	return i
}	
function startTime(){
	var currentDate = new Date()
// now going to save the hours, mins, seconds, you have to have the new Date() to then find the hours , mins and seconds
	var hour = currentDate.getHours()
	var minute = currentDate.getMinutes()
	var second = currentDate.getSeconds()
	// this will make have 12 hour time,. takes off military time	
	if (hour > 12) {
		hour = hour - 12
	}
	//updating the variables
	minute = time(minute)
	second = time(second)
	//now to put to attach it to the html ID
	document.getElementById('time').textContent = hour + ":" + minute + ":" + second
// this makes it reset the function every second
	setTimeout(function () {
		startTime()
		}, 1000)
}
//add this event to display time on the actual webpage
document.getElementById('time').addEventListener('onload', startTime(), false)

