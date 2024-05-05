let width;
let length;

function calculateArea(width, length) {
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);
  let area = width * length;
  document.getElementById(
    "result"
  ).innerText = `The area of the rectangle is: ${area} sq units`;
}
