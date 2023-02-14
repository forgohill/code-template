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

// функция которая создает элементы
const renderItem = (wrap, title) => {
  wrap.insertAdjacentHTML('beforebegin', `

  <li class="todo_item">
  <h3 class="todo_item__header">${title}</h3>
  <div class="buttons">
    <button type="button" class="button button__edit"></button>
    <button type="button" class="button button__duplicate"></button>
    <button type="button" class="button button__delete"></button>
  </div>
</li>

`);

};

initialItems.forEach((title) => {
  renderItem(itemListWrapper, title);
  console.log(`работа функции someFn : ${title}`);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  console.log(`при нажатии на сабмит : ${title}`);
  renderItem(itemListWrapper, title);
  evt.target.title.value = '';
});
