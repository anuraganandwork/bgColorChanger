const course = [
  {
    name: "Biogesic p",
    price: 50,
  },
  {
    name: "Taxim-O 200",
    price: 120,
  },
  {
    name: "Pantop D",
    price: 150,
  },
];
function listAll() {
  const ul = document.querySelector(".listingMedicines");
  course.forEach((course) => {
    const lii = document.createElement("li");
    lii.classList.add("list-group");

    const names = document.createTextNode(course.name);
    lii.appendChild(names);

    const span = document.createElement("span");
    span.classList.add("spanList");
    const insideSpam = document.createTextNode(" " + course.price);
    span.appendChild(insideSpam);

    lii.appendChild(span);
    ul.appendChild(lii);
  });

  const btn = document.querySelector(".sort-btn");

  btn.addEventListener("click", function (e) {});
}

window.addEventListener("load", listAll);
