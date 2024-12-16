

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr, low = 0, high = undefined) {
    if (arr.length > 0) {
        if (!high) {
            high = arr.length - 1;
        }

        let pivot = arr[low];
        let i = low + 1;
        let j = high;

        while (i <= j) {
            while (i <= j && arr[i] <= pivot) {
                i++;
            }

            while (i <= j && arr[j] > pivot) {
                j--;
            }

            if (i < j) {
                swap(arr, i, j);
            }
        }

        swap(arr, low, j);
        return j;
    }
}

/*
quickSort accepts an array, left index, and right index
*/
function quickSort(arr, left = 0, right = undefined) {
    if (right === undefined) {
        right = arr.length - 1;
    }

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

module.exports = { pivot, quickSort };
