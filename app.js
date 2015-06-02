// var square = function(num){
// 	if (typeof num !== "number"){
// 		return "you are wrong";
// 	}
// 	return num * num;
// };

var isOdd = function(number) {
    if (number % 2 === 1) {
        return number + " is odd";
    }

};

function hello() {
    return ("hello world");
}
hello();

function hello_joe(username) {
    if (username === "Joe" || username === "Bob") {
        return ("Hello!");
    } else {
        return ("Hello " + username + "!");
    }
}

function hello_uppercase(username) {
    return ("Hello, " + username.toUpperCase() + "!");
}

function length(n) {
    return n.toString().length;
}

function sum_numbers(n) {
    var i = 1;
    while (i < n) {
        var total = i + n;
        i++;
    }
    return total;
}

function number_list(n) {
    for (var i = 1; i >= n; i++) return (i);

}


function upper(string) {
    return string.toUpperCase();
}
//number_list(9);

function reverse(string) {
    return string.split('').reverse().join('');
}

function hello_list(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("hello world");
    }
    return array;
}

function high_low(numList) {
	var result = [];
    var highest = numList[0];
    var lowest = numList[0];
    for (var i = 0; i < numList.length; i++) {
        //console.log(numList);

        if (numList[i] > highest) {
            highest = numList[i];
        }
        if (lowest > numList[i]) {
            lowest = numList[i];
        }

    }
    //return 
    // console.log("the lowest is : " + lowest);
    // //return 
    // console.log("the highest number is : " + highest);
    result.push(lowest, highest);
    return result;

}

function countWords(words){
	var newList = words.split(" ");
	return (newList.length);
}

function sum_word_len(words){
	var total = 0;
	var newList = words.split(" ");
	for (var i = 0; i < newList.length;i ++){
		total += newList[i].length;
	}
	//return (newList.length);
	return total;
}

function shortest_word(words) {
    //var longest;
    //set results array
    //var result = [];
    //split sentence into array
    var newList = words.split(" ");
    //set first word to be shortest word
    var shortest = newList[0];
    for (var i = 0; i < newList.length; i++) {
        if (newList[i].length <= shortest.length) {
            shortest = newList[i];
            //result.push(shortest);
        };
        //newList[i].length;

    };

    //var results = result[0].length + result;
    //return result;
    return shortest + ":" + shortest.length;
}

function longest_word(words) {
    //var longest;
    //set results array
    var result = [];
    //split sentence into array
    var newList = words.split(" ");
    //set first word to be longest word
    var longest = newList[0];
    for (var i = 0; i < newList.length; i++) {
        if (newList[i].length >= longest.length) {
            longest = newList[i];
            result.push(longest);
        };
        //newList[i].length;
       
    };


    return longest + ":" + longest.length;
}


function word_length(words) {
    var newList = words.split(" ");
    var average = 0;
    for (var i = 0; i < newList.length; i++) {
        average += newList[i].length / newList.length;
    };
    var aveDown = Math.floor(average);
    var aveUp = Math.round(average);
    return "Down : " + aveDown + ", Up : " + aveUp;
}



function avg(words) {
    var newList = words.split(" ");
    var average = 0;
    for (var i = 0; i < newList.length; i++) {
        average += newList[i].length / newList.length;
    };
    //var aveDown = Math.floor(average);
    var aveUp = Math.round(average);
    return "Up : " + aveUp;
}







