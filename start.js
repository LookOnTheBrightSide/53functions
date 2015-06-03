function start(words) {
    var count = 0;

    var newList = words.split(' ');
    var most = newList[0].charAt(0);
    for (var i = 0; i < newList.length; i++) {
        if ((newList[i].charAt(0)) < most) {
            most = newList[i].charAt(0);
        }
    }
    return most.length + " : " most;
    
}