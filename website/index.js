var CHESS = {
    "board" : document.getElementById("board"),
    "buildBoard" : function() {
        var white = true;
        for (var i = 0; i < 8; i++) {
            for (var k = 0; k < 8; k++) {
                if (white) {
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "W" + "' id = 'square" + i + "-" + k + "' data-piece = 'null'></div>";
                    white = false;
                } else {
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "B" + "' id = 'square" + i + "-" + k + "' data-piece = 'null'></div>";
                    white = true;
                }
            }
            white = !white;
        }
    },

    "loadPieces" : function() {
        // array of non-pawn piece identifiers
        var pieces = ["r1", "n1", "b1", "q", "k", "b2", "n2", "r2"];
        
        // create black pawns
        for(var i = 0; i < 8; i++) {
            // add piece to html
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'bp" + i + "'>P</div>";
            
            // position piece horizontally
            document.getElementById("bp" + i).style.left = (i * 10) + "vh";
            
            // change piece color
            document.getElementById("bp" + i).style.color = "#4a4949";
            
            // record piece position as attribute of occupied square
            document.getElementById("square1-" + i).dataset.piece = "bp" + i;
        }
        
        // create white pawns
        for(var i = 0; i < 8; i++) {
            // add piece to html
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'wp" + i + "'>P</div>";
            
            // position piece horizontally
            document.getElementById("wp" + i).style.left = (i * 10) + "vh";
            // position piece vertically
            document.getElementById("wp" + i).style.top = "60vh";
            
            // record piece position as attribute of occupied square
            document.getElementById("square6-" + i).dataset.piece = "wp" + i;
        }
        
        // create white pieces
        for(var i = 0; i < pieces.length; i++) {
            // add piece to html
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'w" + pieces[i] + "'>" + pieces[i] + "</div>";
            
            // position piece horizontally
            document.getElementById("w" + pieces[i]).style.left = (i * 10) + "vh";
            // position piece vertically
            document.getElementById("w" + pieces[i]).style.top = "70vh";
            
            // record piece position as attribute of occupied square
            document.getElementById("square7-" + i).dataset.piece = "w" + pieces[i];
        }
        
        // create black pieces
        for(var i = 0; i < pieces.length; i++) {
            // add piece to html
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'b" + pieces[i] + "'>" + pieces[i] + "</div>";
            
            // position piece horizontally
            document.getElementById("b" + pieces[i]).style.left = (i * 10) + "vh";
            // position piece vertically
            document.getElementById("b" + pieces[i]).style.top = "0vh";
            
            // change piece color
            document.getElementById("b" + pieces[i]).style.color = "#4a4949";
            
            // record piece position as attribute of occupied square
            document.getElementById("square7-" + i).dataset.piece = "w" + pieces[i];
        }
    }
}

window.onload = function() {
    CHESS.buildBoard();
    CHESS.loadPieces();
}

