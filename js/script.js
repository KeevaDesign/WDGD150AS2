const boxData = [
  { title: "Smile Canvas Artistry", quantity: 1, price: "$40.99" },
  { title: "Posi Pages: The Gratitude Journal", quantity: 1, price: "$33.99" },
  { title: "Joyful Aromas Collection", quantity: 1, price: "$42.99" },
  { title: "Happy Wear Affirmation Apparel", quantity: 1, price: "$29.99" },
  { title: "Blissful Home Decor Delights", quantity: 1, price: "$12.99" },
  { title: "Laugh Lounge Game Night", quantity: 1, price: "$9.99" },
  { title: "Upbeat Vibes Affirmation Cards", quantity: 1, price: "$48.99" },
  { title: "Spinning with my bad feeling", quantity: 1, price: "$22.99" },
  { title: "Serene Tea Happiness Blends", quantity: 1, price: "$89.99" },
  { title: "Crafted Joy DIY Kits", quantity: 1, price: "$32.99" },
  { title: "Radiant Experiences Gift Packages", quantity: 1, price: "$92.99" },
  { title: "Cheerful Strokes Art Studio", quantity: 1, price: "$78.99" },
  { title: "Euphoria Elegance Home Accents", quantity: 1, price: "$42.99" },
  { title: "Aroma Joy Blissful Scents", quantity: 1, price: "$18.99" },
  { title: "Giggle Grove Comedy Games", quantity: 1, price: "$23.99" },
  { title: "Craft Joy Creations Kit", quantity: 1, price: "$26.99" },
  { title: "Mood Mingle Interactive Games", quantity: 1, price: "$19.99" },
  { title: "Upbeat Vibes Affirmation Cards", quantity: 1, price: "$48.99" },
  { title: "Radiant Wear Happy Fashion", quantity: 1, price: "$56.99" },
  { title: "Chuckle Chase Laughter Games", quantity: 1, price: "$34.99" },
  { title: "Soul Serenity Calm Tea Blends", quantity: 1, price: "$26.99" },
  { title: "Smile Scape Happiness Experiences", quantity: 1, price: "$27.99" },
  { title: "Elysian Essence Blissful Oils", quantity: 1, price: "$24.99" },
  { title: "Whimsy Wellness DIY Joy Kits", quantity: 1, price: "$33.99" },
  { title: "Mood Magnet Positive Affirmations", quantity: 1, price: "$25.99" },
  { title: "Vivid Vibes Uplifting Art Prints", quantity: 1, price: "$37.99" },
];

const container = document.querySelector("body");

boxData.forEach((data, index) => {
  const box = document.createElement("div");
  box.classList.add("box");

  const titleElement = document.createElement("p");
  titleElement.textContent = data.title;

  const quantityElement = document.createElement("p");
  quantityElement.textContent = data.quantity;

  const priceElement = document.createElement("p");
  priceElement.textContent = data.price;

  box.appendChild(titleElement);
  box.appendChild(quantityElement);
  box.appendChild(priceElement);

  container.appendChild(box);
});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
