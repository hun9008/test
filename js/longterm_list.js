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
    lts = lts.filter((longterm) => longterm.id !== parseInt(li.id));
    saveLts();
}

function paintLongterm(newLongterm) {
    const long = document.createElement("li");
    long.id = newLongterm.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteLongterm);
    long.appendChild(span);
    long.appendChild(button);
    span.innerText = newLongterm.text;
    longtermList.appendChild(long);
}

function handlelongtermSubmit(event){
    event.preventDefault();
    const newLongterm = longtermInput.value;
    longtermInput.value = "";
    const newLongtermObj = {
        text: newLongterm,
        id: Date.now(),
    };
    lts.push(newLongtermObj);
    paintLongterm(newLongtermObj);
    saveLts();
}

longtermForm.addEventListener("submit", handlelongtermSubmit);



const savedLts = localStorage.getItem(LTS_KEY); 

if(savedLts !== null){
    const parsedLts = JSON.parse(savedLts);
    lts = parsedLts;
    parsedLts.forEach(paintLongterm);
}