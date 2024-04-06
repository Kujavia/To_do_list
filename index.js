


function addTask(){
const taskInput = document.getElementById("input_task").value;
const parentElement = document.getElementById('parent');
const newLi = document.createElement('li');
newLi.textContent = taskInput;
parentElement.append(newLi);
taskInput.value ='';
}
function checkTask(){
    const list = document.querySelector('ul');

list.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('active'); 
  }
}
);
}

