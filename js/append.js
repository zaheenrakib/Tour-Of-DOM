//Where to ADD
const placesList = document.getElementById('places-list');
// What to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli Bon';

// ADD the child
placesList.append(li);


// 1 where to add 
const mainContainer = document.getElementById('main-container');

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.append(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);


section.appendChild(ul);

mainContainer.appendChild(section);


//set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = 
`<h1> My Dress Section</h1>
<ul>
  <li>T-Shirt</li>
  <li>Lungi</li>
  <li> Sandu Gengi</li>

</ul>
`
mainContainer.appendChild(sectionDress)