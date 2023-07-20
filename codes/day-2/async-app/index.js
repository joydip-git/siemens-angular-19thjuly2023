const { readFileSync } = require('fs')
const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b;
            if (res === Infinity) {
                //throw new Error('denominator can not be zero')
                const err = new Error('denominator can not be zero')
                rejectFnRef(err)
            }
            //return res;
            resolveFnRef(res)
        }
    )
    return p
}

const readData = () => {
    const p = new Promise(
        (resolveFn, rejectFn) => {
            setTimeout(
                () => {
                    try {
                        const dataFromFile = readFileSync('./data.txt', { encoding: 'utf-8' })
                        resolveFn(dataFromFile.toString())
                    } catch (e) {
                        rejectFn(e)
                    }
                },
                2000
            )
        }
    )
    return p
}
const add = (a, b) => a + b

divide(12, 3)
    .then(
        (data) => {
            console.log(data)
            readData()
                .then(
                    (data) => {
                        console.log(data)
                    },
                    (err) => { console.log(err) }
                )
        },
        (err) => { console.log(err) }
    )




console.log(add(12, 3))