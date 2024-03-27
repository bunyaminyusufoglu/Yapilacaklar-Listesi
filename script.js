const inputRow = document.getElementById("inputRow");
const listContainer = document.getElementById("list-container");

function yapilacakEkle(){
    if(inputRow.value === ''){
        alert("Bir Şey Yazmalısın!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputRow.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputRow.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();