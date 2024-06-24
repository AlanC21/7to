class CZooAnimal {
  constructor(id, name, cageNumber, idTypeAnimal, weight) {
      this.IdAnimal = id;
      this.name = name;
      this.cageNumber = cageNumber;
      this.IdTypeAnimal = idTypeAnimal;
      this.weight = weight;
  }
}

// Crear instancias de CZooAnimal con los datos proporcionados
const zooAnimals = [
  new CZooAnimal(79, "Tigre", 5, 1, 150),
  new CZooAnimal(530, "León", 2, 1, 180),
  new CZooAnimal(88, "Águila", 3, 2, 2),
  new CZooAnimal(202, "Serpiente", 4, 3, 80),
  new CZooAnimal(707, "Pantera", 5, 1, 100)
];

// Funciones para realizar operaciones sobre los datos de los animales
function countAnimalsInCage5Under3kg() {
  return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

function countFelineAnimalsBetweenCages2And5() {
  return zooAnimals.filter(animal => 
      animal.IdTypeAnimal === 1 && 
      animal.cageNumber >= 2 && 
      animal.cageNumber <= 5
  ).length;
}

function listAnimalNameInCage4Under120() {
  const animal = zooAnimals.find(animal => 
      animal.cageNumber === 4 && 
      animal.weight < 120
  );
  return animal ? animal.name : "No se encontró ningún animal";
}

// Funciones para mostrar resultados en la página
function showAnimalsInCage5Under3kg() {
  document.getElementById('results').innerHTML = 
      `Animales en jaula 5 que pesan menos de 3kg: ${countAnimalsInCage5Under3kg()}`;
}

function showFelineAnimalsBetweenCages2And5() {
  document.getElementById('results').innerHTML = 
      `Animales felinos entre las jaulas 2 y 5: ${countFelineAnimalsBetweenCages2And5()}`;
}

function showAnimalNameInCage4Under120() {
  document.getElementById('results').innerHTML = 
      `Nombre del animal en jaula 4 que pesa menos de 120kg: ${listAnimalNameInCage4Under120()}`;
}

// Función para mostrar la lista de animales
function displayAnimalList() {
  const animalListDiv = document.getElementById('animalList');
  let tableHTML = `
      <table>
          <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Jaula</th>
              <th>Tipo</th>
              <th>Peso</th>
          </tr>
  `;
  
  zooAnimals.forEach(animal => {
      tableHTML += `
          <tr>
              <td>${animal.IdAnimal}</td>
              <td>${animal.name}</td>
              <td>${animal.cageNumber}</td>
              <td>${animal.IdTypeAnimal}</td>
              <td>${animal.weight}</td>
          </tr>
      `;
  });
  
  tableHTML += '</table>';
  animalListDiv.innerHTML = tableHTML;
}

// Mostrar la lista de animales al cargar la página
window.onload = displayAnimalList;