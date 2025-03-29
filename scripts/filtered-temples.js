const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const grid = document.querySelector(".grid");

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-temple.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo_guam_temple.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington_dc_temple.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg",
  },
  {
    templeName: "Harare Zimbabwe Temple",
    location: "Harare, Zimbabwe",
    dedicated: "2020, December, 12",
    area: 17250,
    imageUrl: "images/harare-zimbabwe-temple.jpg",
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Umhlanga, KwaZulu-Natal",
    dedicated: "2016, April, 9",
    area: 19860,
    imageUrl: "images/durban-south-africa-temple.jpg",
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl: "images/bountiful-utah-temple.jpg",
  },
];

createCard(temples);

function createCard(filteredTemples) {
  filteredTemples.forEach((temple) => {
    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const img = document.createElement("img");

    h1.innerHTML = temple.templeName;
    li1.innerHTML = `Location: ${temple.location}`;
    li2.innerHTML = `Dedicated: ${temple.dedicated}`;
    li3.innerHTML = `Size: ${temple.area}`;
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.style.height = "auto";
    img.width = 400;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    section.appendChild(h1);
    section.appendChild(ul);
    section.appendChild(img);

    grid.appendChild(section);
  });
}

homeButton.addEventListener("click", () => {
  grid.textContent = "";
  createCard(temples);
});

oldButton.addEventListener("click", () => {
  grid.textContent = "";
  const oldTemples = temples.filter((temple) => {
    const dedicationYear = temple.dedicated.split(",")[0].trim();
    return dedicationYear < 1900;
  });

  createCard(oldTemples);
});

newButton.addEventListener("click", () => {
  grid.innerHTML = "";
  const newTemples = temples.filter((temple) => {
    const dedicationYear = temple.dedicated.split(",")[0].trim();
    return dedicationYear > 2000;
  });
  createCard(newTemples);
});

largeButton.addEventListener("click", () => {
  grid.innerHTML = "";
  const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
  });
  createCard(largeTemples);
});

smallButton.addEventListener("click", () => {
  grid.innerHTML = "";
  const smallTemples = temples.filter((temple) => {
    return temple.area < 10000;
  });
  createCard(smallTemples);
});
