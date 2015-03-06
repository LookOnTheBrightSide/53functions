// var square = function(num){
// 	if (typeof num !== "number"){
// 		return "you are wrong";
// 	}
// 	return num * num;
// };

var isOdd= function(number){
      if(number % 2 === 1){
      			return number + " is odd";
      		}
      
};

function hello(){
	return("hello world");
}
hello();

function hello_joe(username){
	if (username === "Joe" || username === "Bob"){
		return ("Hello!");
	}else{
	return ("Hello " + username + "!");
 }
}

function hello_uppercase(username){
	return ("Hello, " + username.toUpperCase() + "!");
}

function length(n){
	return n.toString().length;
}

function sum_numbers(n){
	var i = 1;
	while (i < n) {
    var total = i + n;
    i++;
  }
return total;
}

function number_list(n){
	for(var i = 1; i <= n; i++){
		return(i);
	}
}






































