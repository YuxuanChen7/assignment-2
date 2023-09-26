function myPush() {
  const ArrayOriginal = ["peaches", "fruits", "strawberries"];
  const elementToAdd = ["pineapples"];
  const result = [].concat(ArrayOriginal, elementToAdd);
  document.querySelector("#myPush_output").innerText =
    "Pushed Array: [" + result.toString() + "]";
}

function myLastIndexOf() {
  const ArrayOriginal = [24, 25, 26, 27, 28];
  const findelement = 28;
  var counttot = 0;
  var finder;
  var end = -1;
  for (let i = 0; i < ArrayOriginal.length; i++) {
    if (!(ArrayOriginal[i] == findelement)) {
      counttot++;
    }
    if (ArrayOriginal[i] == findelement) {
      let finder = i;
      document.querySelector("#myLastIndexOf_output").innerText =
        "Result: " + finder;
    }
    if (counttot == ArrayOriginal.length) {
      document.querySelector("#myLastIndexOf_output").innerText =
        "Result: " + end;
    }
  }
}

function myLastIndexOfFail() {
  const ArrayOriginal = [24, 25, 26, 27, 28];
  const findelement = 0;
  var counttot = 0;
  var finder;
  var end = -1;
  for (let i = 0; i < ArrayOriginal.length; i++) {
    if (!(ArrayOriginal[i] == findelement)) {
      counttot++;
    }
    if (ArrayOriginal[i] == findelement) {
      let finder = i;
      document.querySelector("#myLastIndexOfFail_output").innerText =
        "Result: " + finder;
    }
    if (counttot == ArrayOriginal.length) {
      document.querySelector("#myLastIndexOfFail_output").innerText =
        "Result: " + end;
    }
  }
}
