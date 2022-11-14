const selectionSort = (numbers) => {
    /* Selection Sort
        - find smallest number first, place it at the beginning
        - do it for remaining numbers
        - at the end array will be sorted
    */
    numbers.forEach((element, index) => {
        let small = element;
        // console.log("Small : ", small, index);
        [...numbers].splice(index, numbers.length - index).forEach((i) => {
            if (i < small) {
                small = i;
            }
        });
        if (small !== element) {
            const smallIndex = numbers.indexOf(small);
            const swapNum = numbers[index];
            [numbers[index], numbers[smallIndex]] = [small, swapNum];
        }
    });
    return numbers;
}

module.exports = selectionSort;