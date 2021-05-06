const toDoWrite = document.querySelector(".js-toDoWrite"),
    toDoInput = toDoWrite.querySelector("input"),
    toDoPending = document.querySelector(".js-toDoPending"),
    toDoFinished = document.querySelector(".js-toDoFinished");

const PENDING_LS = 'PENDING',
    FINISHED_LS = 'FINISHED';

let PENDING = [],
    FINISHED = [];

function deletePending(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoPending.removeChild(li);
    const cleanPending = PENDING.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    PENDING = cleanPending;
    saveToDos();
}

function deleteFinished(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const cleanFinished = FINISHED.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    FINISHED = cleanFinished;
    saveToDos();
}

function exchangePending(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoPending.removeChild(li);
    const CopyPending = PENDING.filter(function (toDo){
        return toDo.id === parseInt(li.id);
    });
    const cleanPending = PENDING.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    PENDING = cleanPending;
    paintFinished(CopyPending[0].text,CopyPending[0].id);
}

function exchangeFinished(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const CopyFinished = FINISHED.filter(function (toDo){
        return toDo.id === parseInt(li.id);
    });
    const cleanFinished = FINISHED.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    FINISHED = cleanFinished;
    paintPending(CopyFinished[0].text,CopyFinished[0].id);
}

function saveToDos()
{
    localStorage.setItem(PENDING_LS, JSON.stringify(PENDING));
    localStorage.setItem(FINISHED_LS, JSON.stringify(FINISHED));
}

function paintPending(text, id)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const exchangeBtn = document.createElement("button");
    span.innerText  = text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletePending);
    exchangeBtn.innerText = "✅";
    exchangeBtn.addEventListener("click", exchangePending);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(exchangeBtn);
    li.id = id;
    toDoPending.appendChild(li);
    const toDoObj = {
        id: id,
        text: text
    }
    PENDING.push(toDoObj);
    saveToDos();

}

function paintFinished(text, id)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const exchangeBtn = document.createElement("button");
    span.innerText  = text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteFinished);
    exchangeBtn.innerText = "⏪";
    exchangeBtn.addEventListener("click", exchangeFinished);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(exchangeBtn);
    li.id = id;
    toDoFinished.appendChild(li);
    const toDoObj = {
        id: id,
        text: text
    }
    FINISHED.push(toDoObj);
    saveToDos();
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    const currentId = Date.now();
    paintPending(currentValue, currentId);
    toDoInput.value = "";
}

function loadToDos()
{
    const loadedPending = localStorage.getItem(PENDING_LS);
    const loadedFinished = localStorage.getItem(FINISHED_LS);
    if (loadedPending !== null || loadedFinished !== null)
    {
        const parsePending = JSON.parse(loadedPending);
        const parseFinished = JSON.parse(loadedFinished);
        parsePending.forEach(function(toDo1)
        {
            paintPending(toDo1.text, toDo1.id);
        });
        parseFinished.forEach(function(toDo2)
        {
            paintFinished(toDo2.text, toDo2.id);
        });
    }
    else{
        ;
    }
}

function init()
{
    loadToDos();
    toDoWrite.addEventListener("submit", handleSubmit);
}

init();