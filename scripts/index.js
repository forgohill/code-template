const initialItems = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
];

const itemListWrapper = document.querySelector('.items');
const form = document.querySelector('.add_form');
const template = document.getElementById('item')

const handleDelete = (evt) => {
  console.log(evt.target.closest('.todo_item'));
  evt.target.closest('.todo_item').remove();
};

const handleDublicate = (evt) => {
  const thisElement = evt.target.closest('.todo_item');
  const title = thisElement.querySelector('.todo_item__header');
  const newItem = getItemElement(title.textContent);

  console.log(title.textContent);
  itemListWrapper.insertBefore(newItem, thisElement.nextSibling)
};

const handleEdit = (evt) => {
  const thisElement = evt.target.closest('.todo_item');
  const title = thisElement.querySelector('.todo_item__header');
  const titleText = title.textContent;

  title.remove();
  const titleInput = document.createElement('input');

  const h3title = document.createElement('h3');
  h3title.classList.add('todo_item__header');

  titleInput.value = titleText;
  titleInput.classList.add('todo_item__header-editing');

  titleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      title.textContent = titleInput.value;
      titleInput.remove();
      // console.log(title, thisItem);
      evt.target.closest('.todo_item').prepend(title);
    }
  });
  evt.target.closest('.todo_item').prepend(titleInput);
};

// функция которая создает элементы
const getItemElement = (title) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.todo_item__header');
  newItemTitle.textContent = title;

  const deleteButton = newItemElement.querySelector('.button__delete');
  const editButton = newItemElement.querySelector('.button__edit');
  const duplicateButton = newItemElement.querySelector('.button__duplicate');

  deleteButton.addEventListener('click', handleDelete);
  duplicateButton.addEventListener('click', handleDublicate);
  editButton.addEventListener('click', handleEdit);

  return newItemElement;
};

const renderItem = (wrap, title) => {
  wrap.append(getItemElement(title));
};

initialItems.forEach((title) => {
  renderItem(itemListWrapper, title);
  // console.log(`работа функции someFn : ${title}`);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  console.log(`при нажатии на сабмит : ${title}`);
  if (title) {
    renderItem(itemListWrapper, title);
    evt.target.title.value = '';
  };
});
