// Function to grab keys from an object
function grabKeys(obj) {
  var keys = [];
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          keys.push(key);
      }
  }
  return keys;
}

// Function to grab values from an object
function grabValues(obj) {
  var values = [];
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          values.push(obj[key]);
      }
  }
  return values;
}

// Function to update the output on the website
function updateOutput() {
  var sampleObject = {
      name: 'Robert',
      age: 26,
      city: 'New York'
  };

  var keys = grabKeys(sampleObject);
  var values = grabValues(sampleObject);

  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Keys: " + keys.join(', ') + "<br>Values: " + values.join(', ');
}

// Add a click event listener to the button
document.getElementById("extractButton").addEventListener("click", updateOutput);
