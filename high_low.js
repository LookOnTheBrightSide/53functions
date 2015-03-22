var numList = [1,2,3,4,5,9,8,7,6,-44,99,-4];
function high_low(numList){
var highest = numList[0];
var lowest = numList[0];
for (var i = 0; i < numList.length; i++) {
console.log(numList);
	
	if(numList[i] > highest){
		highest = numList[i];
	}if(lowest > numList[i]){
		lowest = numList[i];
	}	
	
 }
 	//return 
	console.log("the lowest is : " + lowest);
	//return 
	console.log("the highest number is : " + highest);
 	
}

// high_low(numList);

// var words = ["One", "day", "I", "went", "to", "the", "aquarium"];

// words.forEach(function(word){
//   console.log(word);
// });
// var numList = [1,2,3,4,5,9,8,7,6,-44,99,-4];
// numList.forEach(function(num){
// 	console.log(num);
// });
