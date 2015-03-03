TestMyCode.run("testing hello world function", function(assert){

    var result = hello();
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("hello world", result);

});
TestMyCode.run("testing hello hello_uppercase", function(assert){

    var result = hello_uppercase("jon");
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("Hello, JON!", result);

});
TestMyCode.run("testing hello hello_uppercase", function(assert){

    var result = hello_joe("Joe");
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("Hello!", result);

});