function testFunction() {
    var test = "any words";
    if (true) {
        var test = "changed value";
    }

    console.log(test)
}

testFunction();