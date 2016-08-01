var CHESS = {
    // div containing squares and pieces
    "board" : document.getElementById("board"),
    
    // the ID of the currently selected piece
    "activePiece" : null,
    
    // the location of the currently selected piece
    "activePosition" : null,
    
    // the valid moves open to the currently selected piece
    "activeValid" : null,
    
    // creates chess board
    "buildBoard" : function() {
        // whether the current square should be white or not
        var white = true;
        
        // iterate through row ID numbers
        for (var i = 0; i < 8; i++) {
            // iterate through column ID numbers
            for (var k = 0; k < 8; k++) {
                // check if the square should be white
                if (white) {
                    // add a white square to the document
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "W" + "' id = 'square" + i + "-" + k + "' data-piece = 'null'></div>";
                    // mark the next square as black
                    white = false;
                } else {
                    // add a black square to the document
                    CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'square" + "B" + "' id = 'square" + i + "-" + k + "' data-piece = 'null'></div>";
                    // mark the next square as white
                    white = true;
                }
            }
            // make sure rows begin with the opposite color of the previous row's ending square
            white = !white;
        }
    },
    
    // adds pieces to board once board has loaded
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
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'w" + pieces[i] + "'>" + pieces[i].toUpperCase().substr(0, 1) + "</div>";
            
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
            CHESS.board.innerHTML = CHESS.board.innerHTML + "<div class = 'piece' id = 'b" + pieces[i] + "'>" + pieces[i].toUpperCase().substr(0, 1) + "</div>";
            
            // position piece horizontally
            document.getElementById("b" + pieces[i]).style.left = (i * 10) + "vh";
            // position piece vertically
            document.getElementById("b" + pieces[i]).style.top = "0vh";
            
            // change piece color
            document.getElementById("b" + pieces[i]).style.color = "#4a4949";
            
            // record piece position as attribute of occupied square
            document.getElementById("square7-" + i).dataset.piece = "w" + pieces[i];
        }
    },
    
    // add click listeners to each square
    "addListeners" : function() {
        // iterate through the rows of squares
        for(var i = 0; i < 8; i++) {
            // iterate through columns within a row
            for(var k = 0; k < 8; k++) {
                // add a click listener to a square
                document.getElementById("square" + i + "-" + k).addEventListener("click", function() {
                    // call the square clicked listener, informing it of which square has been clicked
                    CHESS.squareClickHandler(this.id);
                }, true);
            }
        }
    },
    
    // deal with clicks on squares
    "squareClickHandler" : function(id) {
        // the square that was clicked
        var square = document.getElementById(id);
        
        // if a piece is selected, move it
        if (CHESS.activePiece) {
            console.log("moving piece");
            
            // the active piece
            var active = CHESS.activePiece;
            
            // record new piece position in square's attributes
            square.dataset.piece = active.id;
            
            // reposition piece based on square's ID
            active.style.top = 10 * parseInt(square.id.substring(6, 7)) + "vh";
            active.style.left = 10 * parseInt(square.id.substring(8)) + "vh";
            
            // deselect piece once moved
            CHESS.activePiece = null;
            
        // select a piece if none already selected
        } else if (square.dataset.piece !== null) {
            console.log("selecting piece");
            
            CHESS.activePosition = square;
            CHESS.activePiece = document.getElementById(square.dataset.piece);
            
        
        // deselect the active piece if an invalid move is attempted    
        } else {
            console.log("deselecting piece");
            
            CHESS.activePiece = null;
        }
    }
}

window.onload = function() {
    CHESS.buildBoard();
    CHESS.loadPieces();
    CHESS.addListeners();
}

