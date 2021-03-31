window.onload=function play() {
	
	var bg = document.querySelector(".mainHead");
	bg.style.color = "white";

	var square = document.querySelectorAll(".square");
	var b = document.querySelector("#restartBlock");
	var res = document.querySelector("#giveResult");
	

	res.textContent = "Click on the color when You're ready.";
	b.style.display = "none";

	var colors = [];
	for(var i=0;i<square.length;i++){																
	    var c1 = Math.floor(Math.random()*(255-0)+0);					// random numbers i.e 1st value of rgb(c1)
	    var c2 = Math.floor(Math.random()*(255-0)+0);
	    var c3 = Math.floor(Math.random()*(255-0)+0);
	    var a = "rgb("+c1+", "+c2+", "+c3+")";
	    colors.push(a);
	}
	console.log("Colors : ",colors);
	
	var rcolor = colors[Math.floor(Math.random()*colors.length)]; 		//selecting random value form colors[];
	console.log("Random color selected : ",rcolor);
	var j;
	for(var i=0;i<square.length;i++){																
	    square[i].style.background = colors[i];
	    if(colors[i] == rcolor)
	    {
	    	j = i;														// contains the index of the random variable
	    }
	}	
	console.log("Random no selected index : ",j);

	var rgb = document.querySelector("#mainHeadRGB");						// show the rgb() color on screen so that the use can identify the color;
	rgb.innerHTML = rcolor;

	for(var i=0;i<square.length;i++){																
	    square[i].addEventListener("click",function(){
	    	if(this.style.background == rcolor)
	    	{
	    		res.textContent = "Congrats! You've have Guessed it Correctly.";
	    		b.style.display = "block";
	    		var k=0;
	    		var s = setInterval(function() {
	    			bg.style.color = colors[k];
	    			k = (k+1)%colors.length;
	    		}, 100);
	    		for(var q=0;q<colors.length;q++)
	    		{
	    			square[q].style.background = rcolor;
	    		}
	    		b.addEventListener("click",function(){
	    			clearInterval(s);
	    			location.reload();
	    		});
			}
	    	else{
	    		//alert("Oops! wrong Guess Buddy. Try agian.");
	    		this.style.background = "black";
	    		var info = document.querySelector("#info");
	    	}
	    });
	}
}
