TestMyCode.run("testing hello world function", function(assert){

    var result = hello();
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("hello world", result);

});
TestMyCode.run("testing hello hello_uppercase", function(assert){

    var result = hello_uppercase("lindani");
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("Hello, LINDANI!", result);

});
TestMyCode.run("testing hello hello_uppercase", function(assert){

    var result = hello_joe("Joe");
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals("Hello!", result);

});

TestMyCode.run("testing number_list", function(assert){

    var result = number_list(1);
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals(1, result);

});

TestMyCode.run("testing number_list", function(assert){

    var result = sum_numbers(2);
    //var result = prompt("what function do you want to test?");
    // is the result as we expected?
    assert.equals(3, result);

});
