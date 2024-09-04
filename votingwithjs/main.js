
function btnfun(e) {
    const btnvalue = e.target;
    const btnattr = btnvalue.getAttribute("ds");
    const score = document.getElementById(btnattr);
    const currentscore = parseInt(score.textContent, 10);
    score.textContent = currentscore + 1;
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", btnfun);
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", btnfun);
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", btnfun);
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", btnfun);

function endgame() {
    const arr1 = ["Jana Sena Party", "Congress Party", "Bharatiya Janata Party", "YSR Congress Party"];
    
    const arr2 = [
        parseInt(document.getElementById("s1").textContent, 10),
        parseInt(document.getElementById("s2").textContent, 10),
        parseInt(document.getElementById("s3").textContent, 10),
        parseInt(document.getElementById("s4").textContent, 10)
    ];

    let max = 0;
    let index = 0;

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
            index = i;
        }
    }

    document.getElementById("winner").textContent = "The winner is " + arr1[index];
}
