const modebtn = document.querySelector("#modebtn");
let forModeBtn = 1;


modebtn.addEventListener("click", () => {
    changeMode()
})

function changeMode() {
    if (forModeBtn == 1) {
        document.documentElement.style.setProperty("--bg", "rgb(54, 69, 79)")
        document.documentElement.style.setProperty("--text", "rgb(229, 229, 229)")
        document.documentElement.style.setProperty("--element-bg", "rgb(40, 40,43)")
        document.documentElement.style.setProperty("--shadow", "rgba(0, 0, 0, 0.448)")
        document.documentElement.style.setProperty("--shadow2", "rgba(255, 255, 255, 0.153)")
        modebtn.innerHTML = `<span id="darkbtn" class="material-symbols-outlined">light_mode</span>`
        forModeBtn = 0;
    } else {
        forModeBtn = 1;
        document.documentElement.style.setProperty("--bg", "rgb(229, 229, 229)")
        document.documentElement.style.setProperty("--text", "rgb(54, 69, 79)")
        document.documentElement.style.setProperty("--element-bg", "rgb(250, 249, 246)")
        document.documentElement.style.setProperty("--shadow", "rgba(255, 255, 255, 0.5)")
        document.documentElement.style.setProperty("--shadow2", "rgba(70, 70, 70, 0.12)")
        modebtn.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`
    }
}

function makeOneTask() {

    const addedTask = document.createElement("div");
    addedTask.setAttribute("class", "addedTask");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "editTask")
    input.readOnly = true;
    input.spellcheck = false;
    input.value = document.querySelector("#writeTask").value;
    addedTask.append(input);

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editbtn");
    editBtn.innerHTML = "<span class='material-symbols-outlined'>edit</span>";
    addedTask.append(editBtn);

    const deletebtn = document.createElement("button");
    deletebtn.setAttribute("class", "deletebtn");
    deletebtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    addedTask.append(deletebtn);

    const checkbox = document.createElement("button");
    checkbox.setAttribute("class", "checkbox");
    checkbox.innerHTML = `<span class="material-symbols-outlined">check_box_outline_blank</span>`;
    addedTask.append(checkbox);

    const tasks = document.querySelector("#tasks");
    tasks.append(addedTask);

    document.querySelector("#writeTask").value = "";
    document.querySelector("#writeTask").focus();

    let editbtns = document.querySelectorAll(".editbtn");
    let inputs = document.querySelectorAll(".editTask");
    let delets = document.querySelectorAll(".deletebtn");
    let addedTasks = document.querySelectorAll(".addedTask");
    let checkboxes = document.querySelectorAll(".checkbox");

    for (let i = 0; i < editbtns.length; i++) {

        editbtns[i].addEventListener("click", () => {
            inputs[i].readOnly = false;
            inputs[i].focus();
        })

        inputs[i].addEventListener("dblclick", () => {
            inputs[i].readOnly = false;
        })

        delets[i].addEventListener("click", () => {
            addedTasks[i].remove();
        })

        let onOff = 1;
        checkboxes[i].addEventListener("click", () => {
            if (onOff == 1) {
                checkboxes[i].innerHTML = `<span class="material-symbols-outlined">check_box</span>`;
                onOff = 0;
            } else {
                onOff = 1;
                checkboxes[i].innerHTML = `<span class="material-symbols-outlined">check_box_outline_blank</span>`;
            }
        })

        

    }
}
function forTimeDate() {

    const now = new Date();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    if (hour > 12) {
        hour -= 12;
        minute += " AM";
    } else {
        minute += " PM";
    }
    console.log(hour);
    document.querySelector("#writeTask").value += `\t\t\t\t\t\t\t\t\t${date}-${month}-${year} | ${hour}:${minute}`;
}
document.querySelector("#addDate").addEventListener("click", forTimeDate);

document.querySelector("#addTask").addEventListener("click", makeOneTask)

document.querySelector("#searchbtn").addEventListener("click",() => {
    document.querySelector("#searchTask").focus();
})

