let x = 100
function foo() {
    //console.log(x)
    let x
    x = 10
    console.log(x)//10
    for (var i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x)//20
    }
    console.log(x)//20

    //inner()
    //declaration
    function inner() {
        console.log('inner')
    }
    inner()

    //test()
    //expression
    var test
    test = function () {
        console.log('test')
    }
    //test()
}
foo()