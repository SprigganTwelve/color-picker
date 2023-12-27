var colorPickUp = document.querySelector("#picker");
var hex = document.querySelector("#hex");
var rgb = document.querySelector("#rgb");
var div = document.querySelector("#color");
var bring = document.querySelector("#import");
var hexCopy = document.querySelector("#hexCopy");
var rgbCopy = document.querySelector("#rgbCopy");
var input = document.querySelector("input");
var img = document.querySelector("img");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

if ((body.style.color = "white")) {
} else {
  h1.style.color = "white";
}

colorPickUp.addEventListener("click", function () {
  var color = new EyeDropper();
  color.open().then((result) => {
    console.log(result);
    var hexColor = result.sRGBHex;
    div.style.background = `${hexColor}`;
    hex.textContent = ` ${hexColor} `;
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);
    rgb.textContent = `  rgb(${r},${g},${b}) `;
  });
});
var copy;
hexCopy.addEventListener("click", () => {
  copy = navigator.clipboard.writeText(hex.textContent).then(alert("text copié"));
});
rgbCopy.addEventListener("click", () => {
  copy = navigator.clipboard.writeText(rgb.textContent).then(alert("text copié"));
});

input.addEventListener("change", () => {
  img.src = URL.createObjectURL(input.files[0]);
});
