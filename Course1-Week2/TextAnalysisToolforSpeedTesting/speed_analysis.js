let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  // Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById("userInput").disabled = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeTaken = (endTime - startTime) / 1000;
  document.getElementById(
    "output"
  ).innerHTML = `Time taken: ${timeTaken} seconds`;
  var userTypedText = document.getElementById("userInput").value;

  // Split the text using regex to count words correctly
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0; // Default value

  if (timeTaken !== 0 && !isNaN(timeTaken)) {
    wpm = Math.round((typedWords / timeTaken) * 60);
  }

  // Display the result
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    `<h2>Typing Test Results: </h2>` +
    `<p>Total length: ${userTypedText.length}</p>` +
    `<p>Words Typed: ${typedWords}</p>` +
    `<p>Time Taken: ${timeTaken.toFixed(2)} seconds</p>` +
    `<p>Speed: ${wpm} WPM</p>`;

  // Reset button
  var button = document.getElementById("btn");
  button.innerHTML = "Reset Test";
  button.onclick = startTest;
}
