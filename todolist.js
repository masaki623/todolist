'use strict';

const todobutton = document.getElementById('send-button');
const todovalue = document.getElementById('todo-input');
const todolist = document.getElementById('todolist');


const addTask = task => {
  const ListItem = document.createElement('li');
  const WorkButton = document.createElement('button');
  const RemoveButton = document.createElement('button');
  let newRow = todolist.insertRow();

  todolist.insertRow();

  let newCell = newRow.insertCell();
  newCell.appendChild(ListItem);

  newCell = newRow.insertCell();
  let newText = document.createTextNode(task);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  WorkButton.textContent = '作業中';
  newCell.appendChild(WorkButton);

  newCell = newRow.insertCell();
  RemoveButton.textContent = '削除';
  newCell.appendChild(RemoveButton);

};

todobutton.addEventListener('click', () => {
  if(!todovalue.value){
    todovalue.value = '';
  } else {
  const task = todovalue.value;
  addTask(task);
  todovalue.value = '';
}});