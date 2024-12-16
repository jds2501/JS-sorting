function getDigit(fullNum, digit) {
    return Math.floor((fullNum % Math.pow(10, digit + 1)) / Math.pow(10, digit));
}

function digitCount(fullNum) {
    return Math.floor(Math.log10(fullNum)) + 1;
}

function mostDigits(numArr) {
    let highestDigitCount = 0;

    for (let i = 0; i < numArr.length; i++) {
        let currentCount = digitCount(numArr[i]);

        if (currentCount > highestDigitCount) {
            highestDigitCount = currentCount;
        }
    }

    return highestDigitCount;
}

function radixSort(numArr) {
    let radixArray = [[], [], [], [], [], [], [], [], [], []];
    let maxDigits = mostDigits(numArr);

    for (let digit = 0; digit < maxDigits; digit++) {
        while (numArr.length > 0) {
            let element = numArr.pop();
            let arrDigit = getDigit(element, digit);
            radixArray[arrDigit].push(element);
        }

        for (let i = 0; i < radixArray.length; i++) {
            while (radixArray[i].length > 0) {
                numArr.push(radixArray[i].pop());
            }
        }
    }

    return numArr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };