const board = document.getElementById("board");
const modeText = document.getElementById("mode");

let mode = "black";

// 0=空 1=黒 2=白
let cells = [];

for (let y = 0; y < 6; y++) {
    cells[y] = [];
    for (let x = 0; x < 6; x++) {
        cells[y][x] = 0;
    }
}

function drawBoard(){

    board.innerHTML="";

    for(let y=0;y<6;y++){

        for(let x=0;x<6;x++){

            const cell=document.createElement("div");
            cell.className="cell";

            if(cells[y][x]===1){

                cell.innerHTML='<div class="black"></div>';

            }

            if(cells[y][x]===2){

                cell.innerHTML='<div class="white"></div>';

            }

            cell.onclick=()=>{

                if(mode==="black") cells[y][x]=1;

                if(mode==="white") cells[y][x]=2;

                if(mode==="erase") cells[y][x]=0;

                drawBoard();

            };

            board.appendChild(cell);

        }

    }

}

function clearBoard(){

    for(let y=0;y<6;y++){

        for(let x=0;x<6;x++){

            cells[y][x]=0;

        }

    }

    drawBoard();

}

function startBoard(){

    clearBoard();

    cells[2][2]=2;
    cells[2][3]=1;
    cells[3][2]=1;
    cells[3][3]=2;

    drawBoard();

}

document.getElementById("blackBtn").onclick=()=>{

    mode="black";
    modeText.textContent="現在：⚫ 黒モード";

}

document.getElementById("whiteBtn").onclick=()=>{

    mode="white";
    modeText.textContent="現在：⚪ 白モード";

}

document.getElementById("eraseBtn").onclick=()=>{

    mode="erase";
    modeText.textContent="現在：🗑 消すモード";

}

document.getElementById("resetBtn").onclick=clearBoard;

document.getElementById("startBtn").onclick=startBoard;

drawBoard();
