// var x = 1.5
// //this rounds the number to the nearest integer
// console.log( Math.round(x) )
//  //this will round the number down
// var y = 1.1
//  console.log( Math.floor(y) )
//  //this rounds up 
// var z = 3.1
// console.log( Math.ceil(z) )
// //creates a random number between 0 and 1
// console.log( Math.random() )
// var today = new Date()
// var month = today.getMonth()
// var year = today.getFullYear()

// console.log(today + month + year)

// var hour = today.getHours()
// var min = today.getMinutes()
// var secs = today.getSeconds()

// console.log(hour)
// console.log(min)
// console.log(secs)
// // after 2 seconds it will send an alert, stating the year.
// // setTimeout(function(){alert(year);}, 2000)
// // this generates a random  number 1-10
// var randomNum = Math.floor((Math.random() * 10) + 1)
// console.log(randomNum)






// // creating an event like the onlick
// function htmlEvent() {
// //storing the variable to connect to the Id, thats in the HTML page
// 	var el = document.getElementById('body')
// // change the date to datestring today
// 	el.textContent = today.getHours()

// el.addEventListener('onload', domListenerEvent(), true)	
// }

//////////CLASSWORK WEEK 12------

// var numArray = [1.5, 6.8, 9.4, 2.3, 8.1]
// var y = []
// for (var i = 0; i < numArray.length; i++) {
// 	var x = Math.round(numArray[i])
// //console.log(x)
// 	y.push(x)
// 	console.log(y)
// 

// var array = []
// function numRandom(){
// 	for (var i = 0; i < 10; i++) {
// 	var random = Math.ceil(Math.random() *100)
// 	array.push(random)
// 	}
// }
// numRandom()
// console.log(array)
//////////========creates the current date
// function theTime(){
// var today = new Date()
// var hour = today.getHours()
// var min = today.getMinutes()
// var sec = today.getSeconds()
// var day = today.getDate()
// var month = today.getMonth() + 1
// var year = today.getFullYear()

// var time = "The current Time is " + hour + ":" + min + ":" + sec
// console.log(time)
// var date = "The date is " + month + "/" + day + "/" + year
// console.log(date)
// }
// setTimeout(function(){theTime()},2000);
 
///////===============HTML event
 // function htmlEvent(){
 //  var today = new Date()
 //  alert(today)
 // }
 // htmlEvent()
//////============DOM event
////storing current time in the variable
// var today = new Date()
// var id = document.getElementById('body')
// function domEvent(){
// 	id.textContent = today.toDateString()
// }
// id.onload = domEvent
// ===========DOM LISTENER EVENT
// var today = new Date()
// var x = document.getElementById('body')
// function domListenerEvent(){
// 	x.textContent = today.toDateString()
// }
// x.addEventListener('onload', domListenerEvent(), false)


























