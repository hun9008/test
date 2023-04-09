const longtermForm = document.getElementById("longterm-form");
const longtermInput = longtermForm.querySelector("#longterm-form input");
const longtermList = document.getElementById("longterm-list");

const LTS_KEY = "lts";
let lts = [];

function saveLts(){
    localStorage.setItem(LTS_KEY, JSON.stringify(lts));
}

function deleteLongterm(event)
{
    const li = event.target.parentElement;
    li.remove();
}

function paintLongterm(newLongterm) {
    const long = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newLongterm;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteLongterm);
    long.appendChild(span);
    long.appendChild(button);
    longtermList.appendChild(long);
}

function handlelongtermSubmit(event){
    event.preventDefault();
    const newLongterm = longtermInput.value;
    longtermInput.value = "";
    lts.push(newLongterm);
    paintLongterm(newLongterm);
    saveLts();
}

longtermForm.addEventListener("submit", handlelongtermSubmit);



const savedLts = localStorage.getItem(LTS_KEY); 

if(saveLts !== null){
    const parsedLts = JSON.parse(savedLts);
    lts = parsedLts;
    parsedLts.forEach(paintLongterm);
}