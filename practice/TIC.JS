window.onload = function() {
    var boxes = document.getElementsByClassName("box");
    for (const ele of boxes) {
        ele.addEventListener("click", marker);
    }

    var player1 = "X";
    var player2 = "O";
    var chance = 1;
    var board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    function marker(e) {
        if (e.target.innerText != "") {
            alert("You cannot mark this block");
            return;
        }
        const cur = e.target;
        var x = Math.floor(cur.id / 3);
        var y = parseInt(cur.id % 3);

        if (chance == 1) {
            cur.innerText = player1;
            board[x][y] = player1;
            chance = 2;
        } else if (chance == 2) {
            cur.innerText = player2;
            board[x][y] = player2;
            chance = 1;
        }

        if (winner()) {
            var message= ("Winner is " + (chance == 2 ? player1 : player2));
            setTimeout(function(){
            alert(message);
            window.location.reload();
        },1000);
    }}

    function winner() {
        // Check rows and columns
        for (var i = 0; i < 3; i++) {
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
                return true;
            }
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
                return true;
            }
        }

        // Check diagonals
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
            return true;
        }
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "") {
            return true;
        }

        return false;
    }
};
