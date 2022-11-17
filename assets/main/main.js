const inputTxt = document.querySelector('#userinput');
const enterBtn = document.querySelector('#enter');
const list = document.querySelector('ul');

const addElement = () => {
    const listElement = document.createElement('li');
    const txt = document.createTextNode(`${inputTxt.value}`);
    listElement.appendChild(txt);
    list.appendChild(listElement);
};

enterBtn.addEventListener('click', addElement);
