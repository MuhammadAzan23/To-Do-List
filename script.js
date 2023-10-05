let input = document.getElementById('input');
let list = document.getElementById('list');
let currentItem = null; 

function todo() {
  if (currentItem) {
    currentItem.firstChild.textContent = input.value;
    document.getElementById('add-btn').textContent = 'Add';
    currentItem = null;
  } else {
    let li = document.createElement('li');
    li.textContent = input.value;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function() {
      edit(li);
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      del(li);
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
  }
}

function edit(li) {
  input.value = li.firstChild.textContent;
  currentItem = li;
  document.getElementById('add-btn').textContent = 'Update';
}

function del(li) {
  li.remove();
  if (currentItem === li) {
    input.value = '';
    currentItem = null;
    document.getElementById('add-btn').textContent = 'Add';
  }
}

function DeleteAll() {
  list.innerHTML = '';
  input.value = '';
  currentItem = null;
  document.getElementById('add-btn').textContent = 'Add';
}
