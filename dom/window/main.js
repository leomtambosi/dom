console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

document.title = 123;
let heading = document.createElement('H1');
heading.innerHTML = 'Bom Dia';
document.body.appendChild(heading);
cabeçalho.style.borderBottom = 'solid 3px #000';