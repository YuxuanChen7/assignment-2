function myEach(array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
      x = array[i];
    }
    return x;
  }
  
  const listforeach = [1, 2, 3, 4, 5];
  const each = document.body.querySelector("#showmyEach");
 each.addEventListener("click", () => {
    const result = myEach(listforeach);
  
    const resultfound = document.body.querySelector("#resultforeach");
  
    resultfound.textContent = "answer: " +  result;
    });


    const myMap = (array, callback) => {
        let x = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                x.push(array[i]);
            }
        }
        return x;
    };
    
    const displayMapResult = () => {
        const originalArray = [1, 2, 3, 4, 5];
        const map = myMap(originalArray, (value, index, array) => value /2 );
        document.querySelector('#result-div-map').innerText = 'Map: ' + map.toString();
    };