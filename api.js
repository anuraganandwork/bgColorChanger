fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log("API " + response.json());
  })
  .catch();

// watch other videos on promises
// fetch returns a promise object
// promise object will gwt eventually filled by result of an async operation
