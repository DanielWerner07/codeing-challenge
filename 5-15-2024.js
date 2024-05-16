// Given a number of bits n, generate a possible gray code for it.

// For example, for n = 2, one gray code would be [00, 01, 11, 10].

function generateGrayCode(n) {

    if (n <= 0) return [];

    let grayCode = ['0', '1'];

    for (let i = 2; i < Math.pow(2, n); i *= 2) {
        for (let j = i - 1; j >= 0; j--) {
            grayCode.push(grayCode[j]);
        }

        for (let j = 0; j < i; j++) {
            grayCode[j] = '0' + grayCode[j];
        }

        for (let j = i; j < 2 * i; j++) {
            grayCode[j] = '1' + grayCode[j];
        }
    }

    return grayCode;

}

const n = 3;
const grayCode = generateGrayCode(n);
console.log(grayCode);