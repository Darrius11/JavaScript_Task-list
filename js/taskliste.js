/* localStorage.clear(); */

console.log(localStorage);


const tt = document.querySelector('#tasktitel');
const sb = document.querySelector('#save-button');
const tasklist = document.querySelector('#task');
let taskArray = [];     /* const taskArray = []; -- geht es nicht  */





//console.log(localStorage.getItem('task')); 
if (localStorage.getItem('task') != null) {
  //    taskArray = [];
    //} else { 
      taskArray = JSON.parse(localStorage.getItem('task'));
      
      for(task of taskArray) {
    /*     let myListItem = document.createElement('li');
        myListItem.textContent = task;
        tasklist.appendChild(myListItem); */        //------es ist die gleich wie in neue     function liste2!!-------
        liste2 (task);
      }
    }
 // console.log(taskArray);





sb.addEventListener('click', () => {
  liste ();
});

tt.addEventListener('keypress', e => {    //keyup - wird bei losgelassener Taste ausgelöst.   / keypress - wird bei gedrückt gehaltener Taste ausgelöst.
  if(e.key == 'Enter') {
    liste ();
  }
});



function liste () {               //addTask ()
/* let myListItem = document.createElement('li');
myListItem.innerText = tt.value;

tasklist.appendChild(myListItem);*/   //-----es ist die geilch wie neue     fucntion liste2!!----------   

 // kann man auch so schreiben,, tasklist.appendChild(document.createElement('li'));

  const taskObj = {
  id: Date.now(),
  titel : tt.value,
  status : 'open'
}


  liste2 (taskObj);       //tt.value
// task in local Storage speichern
taskArray.push(taskObj);    //tt.value
localStorage.setItem('task', JSON.stringify(taskArray));
tt.value = '';
tt.focus();
console.log(localStorage.getItem('task'));
}



function liste2 (task) {
  let ListItem = document.createElement('li');
  //ListItem.textContent = txt ;
  tasklist.appendChild(ListItem);
  //ListItem.addEventListener('click', changeTaskStatus)
  //let checkBox = createCheckbox(task.id, task.status)

  //let checkBox = document.createElement('input');
  //checkBox.setAttribute('type' , 'checkbox');
 // ListItem.appendChild(checkBox);
/*   ListItem.textContent = txt ;   */ 
    ListItem.appendChild(createCheckbox(task.id));    //(task.id) ändern an ganze ---task
    //createCheckbox(task.id);

  ListItem.innerHTML += ' ' + task.titel ;    //  + ist gleich
  ListItem.addEventListener('click', changeTaskStatus);   //'change'  - braucht ein formular element,welche kann endern.
}
/* 
liste2 (tt.value);    //-die muss in die function liste(); schreiben!---
liste2 (task);       // --die muss in die if(localStorage.getItem('task') != null) --schreiben!!----; 
 */


function createCheckbox(task) {    //(id) wenn ist geändert in function liste2, ädern hier auch  
  const cb = document.createElement('input');
  cb.setAttribute('type', 'checkbox');
  cb.setAttribute('value', task.id);  // id  ändern task.id
  //cb.addEventListener('click', changeTaskStatus);   //die geht in function liste2(task)
  return cb;
}

function changeTaskStatus(e) {
  console.log(e.target.value); 
  let cbID = e.target.value;

 let actTask = taskArray.find(elem => elem.id == cbID);  //actTask - active Task
  //actTask.status = 'closed';
  if(actTask.status == 'closed') {
    actTask.status = 'open';
  } else {
    actTask.status = 'closed';
  }

  //actTask.status == 'closed' ? wenn ja => actTask.status = 'open' : actTask.status = 'closed';

  /* 
  - id der checkbox auslesen - done
  - suche task mit dieser id im Array - done
  - ändere status dieses tasks auf den wert, den er nicht hat - done
  - speichere Array in Local Storage - done
  */
}







// Code Refactoring
// selector