const familyMembers = [
  {
    name: "Gru",
    age: "52 years old",
    description: "Gru is a former supervillain turned loving father and husband, always ready with a clever plan to protect his family.",
    image: "img/gruu.png"
  },
  {
    name: "Lucy",
    age: "40 years old",
    description: "Lucy is a secret agent who eventually becomes Gru's wife and the adoptive mother of Margo, Edith, and Agnes.",
    image: "img/lucy.png"
  },
  {
    name: "Margo",
    age: "12 years old",
    description: "Margo is the oldest of the three girls. She's responsible, smart, and protective of her sisters.",
    image: "img/margo.png"
  },
  {
    name: "Edith",
    age: "9 years old",
    description: "Edith is the middle child who loves mischief and adventure. She's tough and always ready for action.",
    image: "img/edith.png"
  },
  {
    name: "Agnes",
    age: "6 years old",
    description: "Agnes is the youngest and most innocent of the three girls. She's known for her love of unicorns and her famous line, 'It's so fluffy!'",
    image: "img/agnes.png"
  }
];

const minions = [
  { name: "Kevin", age: "", image: "img/kevin.png", description: "Kevin is the tallest of the Minions and loves taking charge of missions for Gru." },
  { name: "Otto", age: "", image: "img/otto.png", description: "Otto is a new Minion with braces, big energy, and a knack for trading anything he finds." },
  { name: "Bob", age: "", image: "img/bob.png", description: "Bob is childlike and carries his teddy bear Tim everywhere he goes." },
  { name: "Stuart", age: "", image: "img/stuart.png", description: "Stuart is the one-eyed Minion who prefers jamming on his guitar over following orders." },
  { name: "Carl", age: "", image: "img/carl.png", description: "Carl is known for his siren voice and his tendency to start chaos with his pranks." },
  { name: "Mel", age: "", image: "img/mel.png", description: "Mel is the leader during the Minions' strike and is fiercely loyal to his friends." },
  { name: "Phil", age: "", image: "img/phil.png", description: "Phil is a gentle Minion who dreams of dressing up stylishly and helping wherever needed." },
  { name: "Tim", age: "", image: "img/tim.png", description: "Tim is tall with sprout hair and often plays the father figure among the Minions." },
  { name: "Tomas", age: "", image: "img/tomas.png", description: "Tomas is quiet but observant, always taking notes on Gru's latest inventions." },
  { name: "Dave", age: "", image: "img/dave.png", description: "Dave loves gadgets and is Gru's go-to Minion for anything that involves technology." }
];

const familyContainer = document.getElementById('family-container');

for (let i = 0; i < familyMembers.length; i++) {
  familyContainer.innerHTML += `
    <div class="col-md-6 col-lg-3 mb-4 text-center">
      <div class="card character-card h-100" 
           data-bs-toggle="modal" data-bs-target="#characterModal"
           data-name="${familyMembers[i].name}"
           data-age="${familyMembers[i].age}"
           data-description="${familyMembers[i].description}"
           data-image="${familyMembers[i].image}">
        <img src="${familyMembers[i].image}" class="card-img-top" alt="${familyMembers[i].name}">
      </div>
      <p class="card-name mt-2">${familyMembers[i].name}</p>
    </div>
  `;
}

const minionsContainer = document.getElementById('minions-container');

for (let i = 0; i < minions.length; i++) {
  minionsContainer.innerHTML += `
    <div class="col-6 col-md-4 col-lg-2 mb-4 text-center">
      <div class="card minion-card h-100" 
           data-bs-toggle="modal" data-bs-target="#characterModal"
           data-name="${minions[i].name}"
           data-age="${minions[i].age}"
           data-description="${minions[i].description}"
           data-image="${minions[i].image}">
        <img src="${minions[i].image}" class="card-img-top" alt="${minions[i].name}">
      </div>
      <p class="card-name mt-2">${minions[i].name}</p>
    </div>
  `;
}

document.addEventListener('click', function(event) {
  const card = event.target.closest('.character-card, .minion-card');
  if (card) {
    showCharacterDetails(
      card.dataset.name,
      card.dataset.age,
      card.dataset.description,
      card.dataset.image
    );
  }
});

function showCharacterDetails(name, age, description, image) {
  document.getElementById('modalCharacterName').textContent = name;
  const ageEl = document.getElementById('modalCharacterAge');
  if (age && age.trim() !== '') {
    ageEl.textContent = age;
    ageEl.classList.remove('d-none');
  } else {
    ageEl.textContent = '';
    ageEl.classList.add('d-none');
  }
  document.getElementById('modalCharacterDescription').textContent = description;
  document.getElementById('modalCharacterImage').src = image;
  document.getElementById('modalCharacterImage').alt = name;
}