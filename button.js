var button = document.getElementById("my-button");
var body = document.body;
button.addEventListener("click", function() {
if (body.style.backgroundColor == "black") {
    body.style.backgroundColor = "rgb(242, 196, 56)";
} else {
    body.style.backgroundColor = "black";
}
});