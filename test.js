QUnit.test('isOdd', function(assert) {
    assert.equal(isOdd(5), '5 is odd');
});

QUnit.test('hello world', function(assert) {
    assert.equal(hello(), 'hello world');
});

QUnit.test('hello_joe', function(assert) {
    assert.equal(hello_joe("Joe"), 'Hello!');
    assert.equal(hello_joe("Bob"), 'Hello!');
    assert.equal(hello_joe("Sam"), "Hello Sam!");
});

QUnit.test('hello_uppercase', function(assert) {
    assert.equal(hello_uppercase("Sam"), 'Hello, SAM!');
});

QUnit.test('length', function(assert) {
    assert.equal(length("Sam"), 3);
});

QUnit.test('number_list', function(assert) {
    assert.equal(number_list(1), 1);
});
QUnit.test('sum_numbers', function(assert) {
    assert.equal(sum_numbers(4), 7);
});
QUnit.test('upper', function(assert) {
    assert.equal(length("mom"), 3);
});
QUnit.test('reverse', function(assert) {
    assert.equal(reverse("kids"), "sdik");
});

QUnit.test('hello_list', function(assert) {
    assert.deepEqual(hello_list(2), ["hello world", "hello world"]);
});
QUnit.test('high_low', function(assert) {
    assert.deepEqual(high_low([2, -22, 100]), [-22, 100]);
});
QUnit.test('countWords', function(assert) {
    assert.deepEqual(countWords("the mean machine"), 3);
});
QUnit.test('sum_word_len', function(assert) {
    assert.deepEqual(sum_word_len("the boy is here"), 12);
});
QUnit.test('shortest_word', function(assert) {
    assert.equal(shortest_word("this is my home"),"my:2");
});
QUnit.test('longest_word', function(assert) {
    assert.deepEqual(longest_word("sweet homicidous will come home"),"homicidous:10");
});
QUnit.test('word_length', function(assert) {
    assert.deepEqual(word_length("this is not the moment for all that shozz shoxx m homie"),"Down : 3, Up : 4");
});
QUnit.test('avg', function(assert) {
    assert.deepEqual(avg("this is not the moment for all that shozz shoxx m homie"),"Up : 4");
});





