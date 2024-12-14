function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let midIndex = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, midIndex));
    let rightArr = mergeSort(arr.slice(midIndex, arr.length));
    return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort };