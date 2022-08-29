function addUp (someNum) {
    let newNum = 0;
    for (i = 0; i < someNum + 1; i++) {
        newNum += i;
    }
    return newNum;
}

console.log(addUp(4));