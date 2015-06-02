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