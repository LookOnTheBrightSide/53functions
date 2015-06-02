function sum_word_len(words) {
	var total = 0;
	var newList = words.split(" ");
	for (var i = 0; i < newList.length;i ++){
		total += newList[i].length;
	}
	//return (newList.length);
	return total;
}