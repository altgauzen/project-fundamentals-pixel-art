function addClass() {


}

document.getElementById('color-palette').addEventListener('click', function() {

})


function paintPixel() {

  let selectedPixel = document.querySelector('.selected')

}
function myFunction(){
  var elem = document.getElementsByClassName('selected')[0];
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
  console.log (theCSSprop);
  }
  myFunction()
  



/*
function changeColorItem(event) {
  let allLines = document.querySelectorAll('li');
  let lineSelected = event.target;
  for (let index = 0; index < allLines.length; index += 1) {
    let currentLine = allLines[index];
    if (currentLine === lineSelected) {
      event.target.classList.add('selected');
    } else {
      currentLine.classList.remove('selected');
    }
  }
}

function doubleClick(event) {
  let lineSelected = event.target;
  if (lineSelected.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function newListItem() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('lista-tarefas').appendChild(li);
  li.addEventListener('click', changeColorItem);
  li.addEventListener('dblclick', doubleClick);
  document.getElementById('texto-tarefa').value = '';
}

function clearList() {
  let allLines = document.querySelectorAll('li');
  for (let index = 0; index < allLines.length; index += 1) {
    allLines[index].remove();
  }
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}
*/