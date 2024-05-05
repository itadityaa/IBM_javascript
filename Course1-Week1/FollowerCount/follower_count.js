let count = 0;
function incrementCount() {
  count++;
  displayCount();
  checkCount();
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count; // Display the count in the HTML element with id="countDisplay"
}

function checkCount() {
  if (count === 10) {
    alert("Congratulations! You have reached 10 followers!");
  } else if (count === 20) {
    alert("You have surpassed 10 followers!");
  }
}
