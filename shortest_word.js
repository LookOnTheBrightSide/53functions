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