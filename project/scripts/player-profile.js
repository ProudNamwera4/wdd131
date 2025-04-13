const grid = document.querySelector(".players-grid");

// Player Profile
const players = [
  {
    name: "John",
    surname: "Wick",
    age: 18,
    position: "forward",
    imgUrl: "images/player-icon.webp",
  },
  {
    name: "Peter",
    surname: "Drury",
    age: 16,
    position: "defender",
    imgUrl: "images/player-icon.webp",
  },
  {
    name: "Frank",
    surname: "Witmer",
    age: 23,
    position: "midfielder",
    imgUrl: "images/player-icon.webp",
  },
  {
    name: "Bradley",
    surname: "Wilcox",
    age: 20,
    position: "forward",
    imgUrl: "images/player-icon.webp",
  },
  {
    name: "Chivhayo",
    surname: "Wicknell",
    age: 18,
    position: "defender",
    imgUrl: "images/player-icon.webp",
  },
  {
    name: "Hardy",
    surname: "Nams",
    age: 17,
    position: "winger",
    imgUrl: "images/player-icon.webp",
  },
];

players.forEach((player) => {
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const secH3 = document.createElement("h3");
  const card = document.createElement("section");

  img.src = player.imgUrl;
  img.alt = player.name;
  img.loading = "lazy";
  img.style.height = "auto";
  img.width = 400;

  h2.innerHTML = `Player: ${player.name} ${player.surname}`;
  h3.innerHTML = `Age: ${player.age}`;
  secH3.innerHTML = `Possition: ${player.position}`;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(secH3);

  grid.appendChild(card);
});
