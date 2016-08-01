var CHESS = {
    "board" : document.getElementById("board"),
    "buildBoard" : function() {
        var white = true;
        for (var i = 0; i < 8; i++) {
            for (var k = 0; k < 8; k++) {
                if (white) {
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "W" + "' id = 'square" + i + "-" + k + "'></div>";
                    white = false;
                } else {
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "B" + "' id = 'square" + i + "-" + k + "'></div>";
                    white = true;
                }
            }
            white = !white;
        }
    },

    "loadPieces" : function() {
        
    }
}

window.onload = function() {
    CHESS.buildBoard();
    CHESS.loadPieces();
}

