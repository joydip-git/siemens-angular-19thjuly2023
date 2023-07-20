const { writeFileSync } = require('fs')

const divide = async (a, b) => {
    const res = a / b;
    if (res === Infinity) {
        throw new Error('divisor can not be zero')
    }
    return res
}

const writeData = async (data) => {
    try {
        writeFileSync('./data.txt', data, { encoding: 'utf-8' })
        return true
    } catch (error) {
        throw error
    }
}


async function call() {
    try {
        const data = await divide(12, 3)
        console.log(data)
        try {
            const status = await writeData(data.toString())
            console.log(status)
        } catch (e) {
            console.log(e)
        }
    } catch (err) {
        console.log(err)
    }
}
call()
/**
 *  divide(12, 3)
                .then(
                    (data) => { console.log(data) },
                    (err) => { console.log(err) }
                )
 */