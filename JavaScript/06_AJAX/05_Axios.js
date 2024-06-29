// Axios

// A library for making https request

//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESOLVED!!!", res);
//   })
//   .catch((e) => {
//     console.log("ERROR!!!", e);
//   });

/*const getStarWarsPerson = async (id) => {
  const res = await axios.get(https://swapi.dev/api/people/${id}/);
  console.log(res.data);
};
getStarWarsPerson(5);
getStarWarsPerson(10);
getStarWarsPerson(15); */

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Setting Header with axios  

const ul = document.querySelector("ul");
const button = document.querySelector("button");

const addNewJokes = async () => {
  const jokeText = await getDadJokes(); // call for dad jokes
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  ul.append(newLI);
};
const getDadJokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

button.addEventListener("click", addNewJokes); // appendending a dad joke to list after every click
