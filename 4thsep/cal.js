var btns = document.getElementsByClassName("btn");
var display = document.getElementById("display");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleButtonClick);
}

function handleButtonClick(e) {
    var cur = e.target;
    var buttonText = cur.innerText;

    if (buttonText === "=") {
            var result = eval(display.value);
            display.value = result;
    } else if (buttonText === "C" ) {
        display.value = "";
    } else {

        display.value += buttonText;
    }
}
