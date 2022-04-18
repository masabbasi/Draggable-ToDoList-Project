const $ = document;
const myVars = {
    input:$.querySelector('input'),
    addTask:$.getElementById('add-task'),
    status:$.querySelectorAll('.status'),
    first:$.getElementById('first'),
    eraser:$.getElementById('eraser'),
    allTask:$.querySelectorAll('.my-task')
}

function addTask () {
    let createDiv = $.createElement("div");
    createDiv.classList.add('my-task');
    let taskText =$.createTextNode(myVars.input.value);
    let createI = $.createElement("i");
    createI.className=('fa-solid fa-close');
    createDiv.appendChild(taskText);
    createDiv.appendChild(createI);
    createDiv.draggable="true"
    myVars.first.appendChild(createDiv);
}

myVars.input.addEventListener('keypress',function(event){
    if (event.key==='Enter' && myVars.input.value.trim()!="") {
        addTask()
    }
})

myVars.addTask.addEventListener('click',function(){
    if (myVars.input.value && myVars.input.value.trim()!="" ) {
        addTask()
    }
})

myVars.eraser.addEventListener('click',function(){
    myVars.input.value="";
})

myVars.allTask.forEach(function(item){
    item.addEventListener('dragstart',function(event){
        // event.dataTransfer.setData('taskText',event.value)
        console.log('dragstart');
    })
})

myVars.status.forEach(function(item){
    item.addEventListener('dragover',function(event){
        event.preventDefault()
    })
item.addEventListener('drop',function(event){
    // let myTaskText = event.dataTransfer.getData('taskText')
    console.log('drop');
})
})
