// Fetch API

// the newer way of making requests via JS
// Supports Promises

// Chaining promises
fetch("https://swapi.dev/api/people/1")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json(); // this will return a full data(body) which we want from api
  })
  .then((data) => {
    console.log(data); // Now we have all data of api as an object
    return fetch("https://swapi.dev/api/people/2");
  })
  .then((res) => {
    console.log("Second RESOLVED!!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
  const loadStarWarsPlanets = async () => {   // same thing as above
    const res = await fetch ("https://swapi.dev/api/planets/5/");
    const data = await res.json();
    console.log(data);
}