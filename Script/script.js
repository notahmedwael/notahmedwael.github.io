// Pop up on help button click
const openPopUpElem = document.querySelector("#pop-up-button");
const popUpWindow = document.querySelector(".pop-up-window");
const closePopUpElem = document.querySelector(".close-pop-up");

openPopUpElem.addEventListener('click', () => {
    popUpWindow.style.display = 'block';
});

closePopUpElem.addEventListener('click', () => {
    popUpWindow.style.display = 'none';
});
window.addEventListener('click', (event)=>{
    if(event.target == popUpWindow){
        popUpWindow.style.display= 'none';
    }
});

// Adding and deleting tasks
function addTask(taskText){
    const toDoList = document.querySelector(".to-do");
    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    toDoList.appendChild(taskItem);
}
// Add button event listener

document.querySelector(".add-note").addEventListener('click', ()=>{
    const taskText = document.querySelector("#new-task").value;
    if(taskText.trim() !== ""){
        addTask(taskText);
    }
    document.querySelector("#new-task").value = "";
});

document.querySelector("#new-task").addEventListener('keydown', (event)=>{
    if(event.key === 'Enter' || event.keyCode === 13){
        const taskText = document.querySelector("#new-task").value;
    if(taskText.trim() !== ""){
        addTask(taskText);
    }
    document.querySelector("#new-task").value = "";
    }
});

// Delete button event listener

document.querySelector(".delete-note").addEventListener('click', ()=>{
    const checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedTasks.forEach(task => {
        const taskElem = task.parentElement;
        taskElem.remove();
    });
});