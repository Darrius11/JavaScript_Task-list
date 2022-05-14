//localStorage.clear(); 

console.log(localStorage);

const tt = document.querySelector('#tasktitel');
const sb = document.querySelector('#save-button');
const tasklist = document.querySelector('#task');
let taskArray = [];   


if (localStorage.getItem('task') != null) {
      taskArray = JSON.parse(localStorage.getItem('task'));
      for(task of taskArray) {
        liste2 (task);
      }
    }


sb.addEventListener('click', () => {
  liste ();
});

tt.addEventListener('keypress', e => {    
  if(e.key == 'Enter') {
    liste ();
  }
});


function liste () {            
  const taskObj = {
  id: Date.now(),
  title : tt.value,
  status : 'open'
}
  liste2 (taskObj);       
taskArray.push(taskObj);    
localStorage.setItem('task', JSON.stringify(taskArray));
tt.value = '';
tt.focus();
console.log(localStorage.getItem('task'));
}


function liste2 (task) {
  let ListItem = document.createElement('li');
  tasklist.appendChild(ListItem);
  ListItem.appendChild(createCheckbox(task));
  ListItem.innerHTML += ' ' + task.title ; 
  ListItem.addEventListener('change', changeTaskStatus); 
}


function createCheckbox(task) {
  const cb = document.createElement('input');
  cb.setAttribute('type', 'checkbox');
  cb.setAttribute('value', task.id);
  if(task.status == 'closed') {
    cb.setAttribute('checked', 'checked')
  }
  return cb;
}


function changeTaskStatus(e) {

console.log(e.target.value);

  let cbID = e.target.value;
  let actTask = taskArray.find(elem => elem.id == cbID);
  if(actTask.status == 'closed') {
    actTask.status = 'open';
  } else {
    actTask.status = 'closed';
  }
  localStorage.setItem('task', JSON.stringify(taskArray));
}
