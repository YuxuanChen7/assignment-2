function myReduce(array) {
    let answer = 0;
    for(let i = 0; i <array.length; i++){
        answer +=array[i];
    }
    return answer;
}

const listforreduce = [1,2,3,4,5];
document.getElementById("showmyReduce").addEventListener("click", () =>{

    const result = myReduce(listforreduce);

    const resultfound = document.getElementById("resultforreduce");

        resultfound.textContent = result;
});



function myIncludes(array, target) {
    for(let i = 0; i < array.length; i++){
        if (array[i] === target){
            return true;
        }
    }
    return false;
}

const listforindex = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("showmyIncludesnum").addEventListener("click", () =>{
    const itemcheck = document.getElementById("numitem").value;

    const itemNumber = parseInt(itemcheck, 10); /* changing the input to base 10 value instead of string    */

    const result = myIncludes(listforindex, itemNumber);

    const resultfound = document.getElementById("resultfornum");
    if(result) {
        resultfound.textContent = `${itemNumber} exists`;
    }else {
        resultfound.textContent = `${itemNumber} not exists`;
    }
});

const listforindextext = ['cat','dog','seal','rat','pig'];
document.getElementById("showmyIncludestext").addEventListener("click", () =>{
    const itemcheck = document.getElementById("textitem").value;

    const result = myIncludes(listforindextext, itemcheck);

    const resultfound = document.getElementById("resultfortext");
    if(result) {
        resultfound.textContent = `${itemcheck} exists`;
    }else {
        resultfound.textContent = `${itemcheck} not exists`;
    }
});


function myIndexOf(array, target, start=0) {
    for(let i = start; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}
const listforindexof = [1,2,3,4,5,6,7,5,8,9,10,11,12,13];
document.getElementById("showmyindexoftarget").addEventListener("click", () =>{
    const myindexofitem = document.getElementById("targetindexof").value;

    const targetNumber = parseInt(myindexofitem, 10); /* changing the input to base 10 value instead of string    */
    
    const result = myIndexOf(listforindexof, targetNumber);

    const resultfound = document.getElementById("resultmyindexoffirst");

        resultfound.textContent = result;
});

document.getElementById("showmyindexofstart").addEventListener("click", () =>{
    const myindexoftarget = document.getElementById("secondtarget").value;
    
    const myindexofstart = document.getElementById("secondstart").value;
    
    const targetNumbertarget = parseInt(myindexoftarget, 10); /* changing the input to base 10 value instead of string    */

    const targetNumberstart = parseInt(myindexofstart, 10); /* changing the input to base 10 value instead of string    */
    
    const result = myIndexOf(listforindexof, targetNumbertarget,targetNumberstart);

    const resultfound = document.getElementById("resultmyindexofsecond");

        resultfound.textContent = result;
});