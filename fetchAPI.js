// In JSON, keys must be strings, written with double quotes:
// {

// }

const url = "https://catfact.ninja/fact";
const newss = document.querySelector(".news");
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  // newss.innerHTML = data;
  console.log(data);
}

fetchData();
// if url l alawa kuch aur  fetch krna hai then request ka object bnana hoga
