const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('js-color');
const range = document.getElementById('js-range');
const button = document.getElementById('js-button');

const Initial__Color = "black";
const Canvas__Size = "700";

canvas.width = Canvas__Size;
canvas.height = Canvas__Size;

ctx.strokeStyle = Initial__Color;
ctx.fillStyle = Initial__Color;

let painting = false;
let filling = false;


function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleColorClick(event){
    const bgcolor = event.target.style.backgroundColor;
    ctx.strokeStyle = bgcolor;
    ctx.fillStyle = bgcolor;
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;
}

function handleCanvasClick(){
    if (filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleButtonClick(){
    if(filling === true){
        filling = false;
        button.innerText = 'Fill';
    }else {
        filling = true;
        button.innerText = 'Paint';

    }
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));

if (range){
    range.addEventListener('input', handleRangeChange);
}

if (button){
    button.addEventListener('click', handleButtonClick);
}