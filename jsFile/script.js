const board = document.querySelector(".board")

const input = document.querySelector("input")

createBoard(16);
console.log(board.childElementCount);
let mode = "draw";
let color = "black";

input.addEventListener("keydown", (e)=>{
    if (e.key == 'Enter'){
        let value = input.value;
        input.value = "";
        focus(input)
        deleteBoard();
        createBoard(value);
    } 
})

function deleteBoard(){
    const rows = board.childElementCount
    for (let i=0; i<rows ;i++){
        board.removeChild(board.firstChild)
    }
}

function createBoard(number) {
    for (let i=0; i<number; i++){
        const row = document.createElement("div");
        row.className = "row";
        for (let j=0; j<number; j++){
            const block = document.createElement("div");
            block.className = "block";
            row.appendChild(block);
        }
        board.appendChild(row);
    }
    let blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {block.addEventListener("mouseenter", (e)=> (drawNErase(e)))});
}

blocks = document.querySelectorAll(".block")
blocks.forEach((block) => {block.addEventListener("mouseenter", (e)=> (drawNErase(e)))})

function drawNErase(e){
    if (mode == "draw"){
        e.target.style.backgroundColor =color;
    } else if (mode == "erase"){
        e.target.style.backgroundColor ="beige";
    }
}

document.addEventListener("click", (e)=>{
    switch(e.target.className){
        case "pencil":
            mode = "draw";
            break;
        case "eraser":
            mode = "erase";
            break;
        case "blackColor":
            color = "black";
            break;
    }
})

let colorInput = document.querySelector(".colorInput");
colorInput.addEventListener("input", ()=>{
    color = colorInput.value;
})


let clear= document.querySelector(".clear");

clear.addEventListener("click", ()=>{
    let value = board.childElementCount;
    deleteBoard();
    createBoard(value);

})