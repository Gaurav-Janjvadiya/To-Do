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

let filteredArray;
let addedTask = [];
let hii;
let checkboxes;
let addedTasks;

function makeOneTask() {

    addedTask = document.createElement("div");
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

    const dotsTask = document.createElement("button");
    dotsTask.setAttribute("id", "dotsTask");
    dotsTask.innerHTML = `<span class="material-symbols-outlined">more_vert</span>`;
    addedTask.append(dotsTask);

    const btns = document.createElement("div");
    btns.setAttribute("id",'btns');
    btns.innerHTML = `<button id="editbtn">
        <span class="material-symbols-outlined">
            edit
        </span>
    </button>
    <button id="deletebtn">
        <span class="material-symbols-outlined">
            delete
        </span>
    </button>
    <button id="checkbox">
        <span class="material-symbols-outlined">
            check_box_outline_blank
        </span>
    </button>`;
    addedTask.append(btns);


    const tasks = document.querySelector("#tasks");
    tasks.append(addedTask);

    document.querySelector("#writeTask").value = "";
    document.querySelector("#writeTask").focus();

    let editbtns = document.querySelectorAll(".editbtn");
    let ideditbtns = document.querySelectorAll("#editbtn");
    let inputs = document.querySelectorAll(".editTask");
    let delets = document.querySelectorAll(".deletebtn");
    let iddelets = document.querySelectorAll("#deletebtn");
    addedTasks = document.querySelectorAll(".addedTask");
    let idcheckboxes = document.querySelectorAll("#checkbox");
    checkboxes = document.querySelectorAll(".checkbox");
    let dotsTasks = document.querySelectorAll("#dotsTask");
    let allbtns = document.querySelectorAll("#btns");

    for (let i = 0; i < editbtns.length; i++) {

        ideditbtns[i].addEventListener("click",() => {
            inputs[i].readOnly = false;
            inputs[i].focus();
        })

        iddelets[i].addEventListener("click",() => {
            addedTasks[i].remove();
        })
        let forIdCheckbox = 1;
        idcheckboxes[i].addEventListener("click", () => {
            if (forIdCheckbox == 1) {
                idcheckboxes[i].innerHTML = `<span class="material-symbols-outlined">check_box</span>`;
                forIdCheckbox = 0;
            } else {
                forIdCheckbox = 1;
                idcheckboxes[i].innerHTML = `<span class="material-symbols-outlined">check_box_outline_blank</span>`;
            }
        })

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
        let on = 1;
            dotsTasks[i].addEventListener("click",()=>{
                if(on == 1){
                     on = 0;
                     allbtns[i].style.display = "flex"
                }else{
                 on = 1;
                 allbtns[i].style.display = "none";
                }
                gsap.fromTo(allbtns[i],{
                 opacity:0,
                 duration:0.5,
                 width:"0"
                },{
                 opacity:1,
                 duration:0.5,
                 width:"10.5rem"
                })
             })
    }

    gsap.fromTo(addedTask, {
        y: -30,
        opacity: 0.5,

    }, {
        y: 0,
        opacity: 1,
        ease: "bounce.out",
    })
    // hii = Array.from(inputs);
    // hii = hii.filter(
    //     function(arr){
    //         if(arr.value === "Ga"){
    //             return arr;
    //         }
    //     }
    // );
}





function forTimeDate() {

    const now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    if (hour > 12) {
        hour -= 12;
        minute += " PM";
    } else {
        minute += " AM";
    }
    document.querySelector("#writeTask").value += `\t\t${date}-${month}-${year} | ${hour}:${minute}`;
}
const addDate = document.querySelector("#addDate");


addDate.addEventListener("click", forTimeDate);

document.querySelector("#addTask").addEventListener("click", makeOneTask);
document.querySelector("#writeTask").addEventListener("keydown", (e) => {
    if(e.key === "Enter")
    {
        makeOneTask();
    }
});

document.querySelector("#sortbtn").addEventListener("click",() => {
    gsap.fromTo("#sortOptions",{
        opacity:0,
        display:'none',
        duration:0,
        x:60
    },{
        opacity:1,
        display:'flex',
        duration:2,
        x:0
    })
    gsap.to("#sortbtn",{
        opacity:0,
        duration:0,
    })
})


let swich = 1;
document.querySelector("#searchbtn").addEventListener("click", () => {
    gsap.fromTo("#searchTask", {
        display: 'none',
        width: "0%",
        opacity: 0
    }, {
        display: 'flex',
        width: "30%",
        duration: 1,
        opacity: 1
    })
})

document.querySelector("#searchbtn").addEventListener("click", () => {
    for(let i=0;i<tasks.children.length;i++){
        if(document.querySelector("#searchTask").value === tasks.children[i].children[0].value){
            document.querySelector("#serchResultPart").innerHTML += tasks.children[i].children[0].value + "</br>";
        }
    }
   if(document.querySelector("#searchTask").value){
    if(swich == 1){
        swich = 0;
        document.querySelector("#serchResultPart").style.display = "flex";
    }else{
        swich = 1;
        document.querySelector("#serchResultPart").style.display = "none";
    }
 }
})
document.querySelector("#searchTask").addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        for(let i=0;i<tasks.children.length;i++){
            if(document.querySelector("#searchTask").value === tasks.children[i].children[0].value){
                document.querySelector("#serchResultPart").innerHTML += tasks.children[i].children[0].value + "</br>";
            }
        }
       if(document.querySelector("#searchTask").value){
        if(swich == 1){
            swich = 0;
            document.querySelector("#serchResultPart").style.display = "flex";
        }else{
            swich = 1;
            document.querySelector("#serchResultPart").style.display = "none";
        }
     }
    }
})
const sortOptions = document.querySelector("#sortOptions");
const checked = document.querySelector("#checked");
const nonChecked = document.querySelector("#nonChecked");
const all = document.querySelector("#All");
let arr;

sortOptions.addEventListener("click",(e) => {
    if(e.target === checked){
        arr = Array.from(addedTasks).filter((e) => {
            if(e.children[3].innerHTML == `<span class="material-symbols-outlined">check_box</span>`){
                return e;
            }
        })
        arr.forEach((e) => {
            tasks.prepend(e);
        })
    }
    if(e.target === nonChecked){
        arr = Array.from(addedTasks).filter((e) => {
            if(e.children[3].innerHTML == `<span class="material-symbols-outlined">check_box_outline_blank</span>`){
                return e;
            }
        })
        arr.forEach((e) => {
            tasks.prepend(e);
        })
    }
    if(e.target === all){
        arr = Array.from(addedTasks).filter((e) => {
            if(e.children[3].innerHTML == `<span class="material-symbols-outlined">check_box_outline_blank</span>` || e.children[3].innerHTML == `<span class="material-symbols-outlined">check_box</span>`){
                return e;
            }
        })
        arr.forEach((e) => {
            tasks.prepend(e);
        })
    }
})
