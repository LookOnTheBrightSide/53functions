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