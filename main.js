const font = document.getElementById("font");
const text = document.querySelector("textarea");
const upper = document.querySelector(".btn1");
const lower = document.querySelector(".btn2");
const clear = document.querySelector(".btn3");
const copy = document.querySelector(".btn4");
const space = document.querySelector(".btn5");
const words = document.querySelector(".words span");
const char = document.querySelector(".characters span");
const time = document.querySelector(".time span");
const body = document.querySelector("body");
const toggle = document.querySelector(".btn-toggle");
const switchBtn = document.querySelector(".switch");
const header = document.querySelector(".header");



str = "";
const fonts = [
    {name:"serif"},
    {name:"monospace"},
    {name:"cursive"},
    {name:"fantasy"},
    {name:"Arial"},
    {name:"verdana"},
    {name:"Times New Roman"},
    {name:"Tahoma"},
    {name:"Trebuchet MS"},
    {name:"Georgia"},
    {name:"Garamond"},
    {name:"Courier New"},
    {name:"Brush Script MT"}
]

fonts.forEach(fonty => {
    const option1 = document.createElement("option");
    option1.textContent = fonty.name;
    font.appendChild(option1);
})

function getWords(str){
    const array = str.trim().split(/\s+/);
    words.innerHTML = array.length;
}

function getChar(str){
    const array = str.trim().length;
    char.innerHTML = array;
}

function getTime(str){
    const wpm = 125;
    const word = str.trim().split(/\s+/).length;
    const tim = (word/wpm);
    time.innerHTML = tim;
}

text.addEventListener("click", (e) =>{
    e.target.classList.add("inTextClick");
    setTimeout(() =>{
        e.target.classList.remove("inTextClick");
    },200)
})

text.addEventListener("input",function(){
    str = text.value;
    getWords(str);
    getChar(str);
    getTime(str);
})

upper.addEventListener("click", function(){
    str1 = str.toUpperCase();
    text.value = str1;
})

lower.addEventListener("click", function(){
    str1 = str.toLowerCase();
    text.value = str1;
})

clear.addEventListener("click", function(){
    str = "";
    text.value = str;
    words.innerHTML = "0";
    char.innerHTML = "0";
    time.innerHTML = "0";
}) 

copy.addEventListener("click", function(){
    text.select();
    document.execCommand('copy');
})

space.addEventListener("click", function(){
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
	str = str.replace(/[ ]{2,}/gi," ");
	str = str.replace(/\n /,"\n");
    text.value = str;
})

font.addEventListener("input", function(){
    const fontStyle = font.value;
    text.style.fontFamily = `${fontStyle}`;
})

toggle.addEventListener("click", ()=>{
    body.classList.toggle("darkMode");
    header.classList.toggle("header-dark");
    text.classList.toggle("textarea-dark");
})

const noBtn = document.querySelectorAll("button").length;
for(var i=0 ; i<noBtn ; i++){
    document.querySelectorAll("button")[i].addEventListener('click', (e) =>{
        e.target.classList.add("click");
        setTimeout(()=>{
            e.target.classList.remove("click");
        },100)
    })
}

