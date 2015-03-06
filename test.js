QUnit.test('isOdd', function (assert) {
    assert.equal(isOdd(5), '5 is odd');
});

QUnit.test('hello world', function (assert){
	assert.equal(hello(), 'hello world');
});

QUnit.test('hello_joe', function (assert){
	assert.equal(hello_joe("Joe"), 'Hello!');
	assert.equal(hello_joe("Bob"), 'Hello!');
	assert.equal(hello_joe("Sam"), "Hello Sam!");
});

QUnit.test('hello_uppercase', function (assert){
	assert.equal(hello_uppercase("Sam"), 'Hello, SAM!');
});

QUnit.test('length', function (assert){
	assert.equal(length("Sam"), 3);
});

QUnit.test('number_list', function (assert){
	assert.equal(number_list(2), 1);
});
QUnit.test('sum_numbers', function (assert){
	assert.equal(sum_numbers(4), 7);
});







