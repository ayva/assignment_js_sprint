var b = jsboard.board({ attach: "game", size: "8x8", style: "checkerboard" });
var x = jsboard.piece({ text: "X", fontSize: "40px", textAlign: "center" });
var bp = jsboard.piece({ text: "●", fontSize: "40px", textAlign: "center"});
var wp = jsboard.piece({ text: "○", fontSize: "40px", textAlign: "center"});

/// Black loops

var initialize = function(){
	for(var j=0; j<7; j+=2){
		b.cell([5, j]).place(bp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([6, j]).place(bp.clone());
	}

	for(var j=0; j<7; j+=2){
		b.cell([7, j]).place(bp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([0, j]).place(wp.clone());
	}

	for(var j=0; j<7; j+=2){
		b.cell([1, j]).place(wp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([2, j]).place(wp.clone());
	}

	initializePieceEvents();
}

var initializePieceEvents = function(){
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get()){
					b.cell([i, j]).on("click", selectPiece);
				}
			}
		}
	}
}

var selectPiece = function(){
	b.cell("each").removeOn("click", selectPiece);
	b.cell(this).style({ backgroundColor: "red" });
	b.cell(this).on("click", deselectPiece);
}

var deselectPiece = function(){
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get()){
					b.cell([i, j]).on("click", selectPiece);
				}
			}
		}
	}
	b.cell(this).style({ backgroundColor: "gray" });
	b.cell(this).removeOn("click", deselectPiece);
}

initialize();