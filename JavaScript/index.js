const inputbox = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
function addTask(){
    if(inputbox.value ===''){
        alert("You must enter something");
    }
   else{
    let li= document.createElement("li");
    li.innerHTML=inputbox.value;
    list_container.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputbox.value="";
   saveData()
}
list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showtask(){
    list_container.innerHTML=localStorage.getItem("data");
}
showtask()