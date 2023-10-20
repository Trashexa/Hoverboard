const contenedor = document.getElementById('contenedor');
const colores =  ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const CUADRADOS = 500;

for (let i = 0; i < CUADRADOS; i++){
	const cuadrado = document.createElement('div');
	cuadrado.classList.add('cuadrado');

	cuadrado.addEventListener('mouseover', ()=> elegirColor(cuadrado));

	cuadrado.addEventListener('mouseout', () => sacarColor(cuadrado));
	contenedor.appendChild(cuadrado);
}

function elegirColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function sacarColor(element){
	element.style.background = '#1d1d1d';
	element.style.boxshadow = ' 0 0 2px #000';
}

function getRandomColor() {
	return colores[Math.floor(Math.random() * colores.length)];
}