//NOTES: try using chroma.js to alter colors so they're not too dark or light


// Hex Clock gets the time and then changes the color of elements to match
// the hex value/time
// Why? Because I think the HexClock.exe in Hacknet is pretty cool, actually


// First step - make a digital clock to display the running 'hex code'
// set the div where the clock will display
var div = document.getElementById('hexClock');

// var elem will get incremented in the below for loop so any element 
//with class colorChange will have its color changed
var elem = document.getElementsByClassName("colorChange")


// create date object, get hours, minutes, seconds
function hexClock() {
	div.innerHTML = '';
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	// add 0 to single digits
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10){
		m = "0" + m; 
	}
	if(s < 10){
		s = "0" + s;
	}

	// some es6 concatenation - neat
	hexValString = `${h}${m}${s}`;
	console.log("hexValString:" + hexValString);
	console.log(typeof("hexValString Type: " + hexValString));

	hexValNum = parseInt(hexValString);
	console.log("hexValNum: " + hexValNum)
	console.log("hexValNum type: " + typeof(hexValNum));


	// for testing output
	//color = "#" + hexValNum.toString(16);
	hexValHash = "#"+hexValNum
	console.log("hexValHash: " + hexValHash)

	//chromaColor = chroma(hexValHash).luminance(0.2); 
	
	//document.getElementById("colorChange").style.backgroundColor=chromaColor; 

	// format variables for page
	div.innerHTML = "#" + h + m + s;

	// change colors of html elements
	// hexclock.exe changes them every 10 seconds & displays clock in 24 hr format
	for (var i = 0; i < elem.length; i++) {
		if (s % 10 === 0) {
			/* elem[i].style.box-shadow == chromaColor; */
			elem[i].style.backgroundColor = hexValHash; //chromaColor;
			elem[i].style.color = "#FAF0E6";
		}
		
		
	}
}

// get new hours, minutes & seconds every second (every 1000 miliseconds)
setInterval(hexClock, 100);




	// works but most hex numbers are not a color
	//color = hexValNum.toString(16);
	//hexValHash = "#"+color;
	//console.log("hexValHash: " + hexValHash);


	//from CodePen.io Test - decimal to hex conversion
	//num = 013125;

	//hexString = num.toString(16);
	//console.log("hexString: " + hexString);

	//var color = "#" + hexString
	//console.log("color: " + color);

	//end CodePen.io hex conversion test code