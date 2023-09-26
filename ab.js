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