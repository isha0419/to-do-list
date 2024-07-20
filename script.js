const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-containers");

function addTask(){
    if(inputBox.value===" "){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        // whatever we write in the input field that will be added to li
        li.innerHTML=inputBox.value; 
        // to display 
        listContainer.appendChild(li);
        // cross icon at end of each task
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    // for emptying the input field after addition of tasks
    inputBox.value="";
    // calling after every new task is added
    saveData();

}
// whenever we click on the list container
listContainer.addEventListener("click", function (e){
    // if we have clicked on the task
    if(e.target.tagName==="LI"){
         e.target.classList.toggle("checked");
         // toggle used to check and uncheck the task
         saveData();
    }
    // if clicked on cross
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

// to save the data even when refreshed or closed tab
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
// to display stored data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
// calling whenever the browser is opened
showTask();
