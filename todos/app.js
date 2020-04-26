const addNew = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = function (todo) {
  let html = `
    <li class="list-group-item d-flex justify-content-between align-items-centered">
      <span>${todo}</span>
      <i class="far material-icons delete">delete</i>
    </li>
  `;

  list.innerHTML += html;
}

addNew.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addNew.add.value.trim();

  if (!todo) {
    return;
  }

  generateTemplate(todo);

  addNew.reset();
})

list.addEventListener('click', e => {
  e.stopPropagation();

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter(li => !li.textContent.toLowerCase().includes(term))
    .forEach(li => {
      li.classList.add('filtered');
    });

  Array.from(list.children)
    .filter(li => li.textContent.toLowerCase().includes(term))
    .forEach(li => {
      li.classList.remove('filtered');
    });
};

search.addEventListener('keyup', e => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
})

