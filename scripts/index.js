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


// функция которая создает элементы
const getItemElement = (title) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.todo_item__header');
  newItemTitle.textContent = title;
  return newItemElement;
};

const renderItem = (wrap, title) => {
  wrap.append(getItemElement(title));
};

initialItems.forEach((title) => {
  renderItem(itemListWrapper, title);
  console.log(`работа функции someFn : ${title}`);
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
