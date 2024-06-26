// Fetch API

// the newer way of making requests via JS
// Supports Promises

fetch("https://swapi.dev/api/people/1")
  .then((res) => {
    console.log("RESOLVED!", res);
    // res.json(); this is used to retrieve full data(body)
    return res.json();
  })
  .then((data) => {
    console.log(data);
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