   
var t = parseFloat(document.getElementById("temperature").innerHTML);  
var s = parseFloat(document.getElementById("speed").innerHTML);
var f = 0;
if (t <= 50 && s > 3 ){ 
        f= 35.74 + (0.6215 * t) - (35.75 * Math.pow (s, 0.16)) + (0.4275 * t * Math.pow (s, 0.16));
        f= Math.round(f);
        document.getElementById("windchill").innerHTML = f;
    }
else {
        document.getElementById("windchill").innerHTML = "N/A";
    }



