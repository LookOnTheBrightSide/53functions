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








