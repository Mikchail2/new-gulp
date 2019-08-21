// // функция которая будет создовать элементы
//  const checkbox = createElement('input',{type: 'checkbox',className: 'checkbox',checked: todo.completed ? 'checked': ''});
//         const label = createElement('label',{className: 'title'}, todo.title);
//         const editInput = createElement('input', {type: 'text',className:'textfield'});
//         const editButton = createElement('button', {className: 'edit'},'Изменить');
//         const removeButton = createElement('button',{className: 'remove'},'Удалить');
//         const listItem = createElement('li',{className: `todo-item${todo.completed ? ' completed' : ''}`,'data-id':todo.id},checkbox,label,editInput,editButton,removeButton);
//
//         return this.addEventListeners(listItem);
function createElement(tag, props, ...children) {
  const element = document.createElement(tag);
  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key]);
    } else if (key.startsWith('for')) {
      element.setAttribute(key, props[key])
    } else {
      element[key] = props[key];
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }

    element.append(child);
  });

  return element;
}


let item = document.querySelector('.todo__item');
let formItem = document.querySelector('.todo__form');
let list = document.querySelector('.todo__list');

const createTodo = (title) => {
  let id = Math.random().toString(36).slice(2);
  const inputCheck = createElement('input', {type: 'checkbox', className: 'todo__check',id: id});
  const inputEnter = createElement('input', {type: 'text', className: 'todo__enter'});
  const label = createElement('label', {className: 'todo__label',for: id}, title);
  // label.setAttribute('for',id);
  // const editInput = createElement('input', {type: 'text', className: 'todo__label'});
  const editButton = createElement('button', {className: 'button todo__button-modify'}, 'Modify');
  const saveButton = createElement('button', {className: 'button todo__button-save'}, 'Save');
  const removeButton = createElement('button', {className: 'button todo__button-remove'}, 'Remove');
  const li = createElement('li', {className: 'todo__item'}, inputEnter
                          ,inputCheck,label,saveButton,editButton,removeButton);
  bindListeners(li)
  list.append(li);

};




const bindListeners = (item) => {
  const id = item.getAttribute('data-id');
  const label = item.querySelector('.todo__label');
  const input = item.querySelector('.todo__enter');
  const modifyButton = item.querySelector('.todo__button-modify');
  const saveButton = item.querySelector('.todo__button-save');
  const removeButton = item.querySelector('.todo__button-remove');
  item.addEventListener('click', (e) => {
    if (e.target === modifyButton) {
      item.classList.add('todo__editing')
    }
    if (e.target === saveButton) {
      label.innerHTML = input.value
      input.value = '';
      item.classList.remove('todo__editing')

    }
    if (e.target === removeButton) {
      item.remove();
    }
  })

};

formItem.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = formItem.querySelector('.todo__add');
  if (input.value == '') {
    alert('Введи задачу')
      return
  }

  createTodo(input.value);


});

bindListeners(item);
