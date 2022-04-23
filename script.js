const $ = document;
let dragged;
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
    createI.addEventListener('click',function(event){
        event.target.parentElement.remove()
    })
    createDiv.addEventListener('dragstart',function(event){
        dragged = createDiv;
    })
    myVars.input.value=''
}

function removeTask(event) {
    event.target.parentElement.remove()
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

myVars.status.forEach(function(item){
   item.addEventListener('dragover',function(event){
        event.preventDefault()
    })
    item.addEventListener('drop',function(event){
        if (event.target.className == "status") {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
          }
      
})
})
