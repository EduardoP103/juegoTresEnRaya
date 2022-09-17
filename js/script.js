// alert("hola programadores")
let turn = 0;
const board = [];

//RECORRER CUADRICULA Y PINTAR X - O
document.querySelectorAll(".square").forEach((button, i) => {button.addEventListener(
    "click", function(){
        if(button.innerHTML === ""){
            turn++;
            let character = (turn % 2) ? "X" : "O"
            button.innerHTML = character;
            // alert(i); CAPTURA LA POSICIÓN
            board[i] = character;

            if(winner()){
                window.alert(`Winner 🥇: ${character}`)
                board.length=0
            }
            // LLAMO A LA FUNCION WINNER: GANO O PERDIO
        }
    });
});

// EVALUAR OPCIONES DE EXITO
const winner = () => {
    if(board[0] == board[1] && board [0] == board[2] && board[0]){ // FILA 1
        return true;
    }else if(board[3] == board[4] && board [3] == board[5] && board[3]){ // FILA 2
        return true;
    }else if (board[6] == board[7] && board [6] == board[8] && board[6]){ // FILA 3
        return true;
    }else if(board[0] == board[3] && board [0] == board[6] && board[0]){ // COLUMNA 1
        return true; 
    }else if(board[1] == board[4] && board [1] == board[7] && board[1]){ // COLUMNA 2
        return true; 
    }else if(board[2] == board[5] && board [2] == board[8] && board[2]){ // COLUMNA 3
        return true;
    }else if(board[0] == board[4] && board [0] == board[8] && board[0]){
        return true;
    }else if(board[2] == board[4] && board [2] == board[6] && board[2]){
        return true;
    }
    return false;
}

// RESETEAR JUEGO

function reset(){
    document.querySelectorAll(".square").forEach(button => {
        button.innerHTML = "",
        board.length = 0;
    });
}