const myFilter = (array, callback) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
};

const displayFilterResult = () => {
    const originalArray = [1, 2, 3, 4, 5];
    const filteredArray = myFilter(originalArray, (value, index, array) => value % 2 === 0);
    document.querySelector('#result-div-filter').innerText = 'Filtered Array: ' + filteredArray.toString();
};

const mySome = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
};

const displaySomeResult = () => {
    const originalArray = [1, 2, 3, 4, 5];
    const somedValue = mySome(originalArray, (value, index, array) => value > 2);
    document.querySelector('#result-div-some').innerText = 'Somed Result: ' + somedValue;
};
