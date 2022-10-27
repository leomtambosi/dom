let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Boa noite pessoal';
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (1 % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = '#fff';
}

let nome = document.getElementsByName('fitem');
console.log(nome);
nome[0].textContent = 'ola pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'tudo bem';
nome[1].style.backgroundColor = '#BAC1FB';

let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

let ul = document.getElementById('items');
ul.style.listStyle = 'none';