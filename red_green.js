

function RedOrGreen(myElement){	

	var resultDiv = document.createElement("div");
    resultDiv.id = myElement;
    resultDiv.style.height = "300px";
    resultDiv.style.width = "300px";
    resultDiv.style.border = "solid 5px black";
   



	this.makeGreen =function(){
		resultDiv.style.backgroundColor = 'rgb(0, 255, 0)';
		resultDiv.innerHTML = ("Passed : " + passed + " out of " + totalTests + " tests");
	};	
	this.makeRed =function(){
		resultDiv.style.backgroundColor = 'rgb(255, 0,0)';
		resultDiv.innerHTML = ("Failed : " + failed + " out of " + totalTests + " tests");
	};	
	document.body.appendChild(resultDiv);
}