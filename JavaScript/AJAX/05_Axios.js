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

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJokes = async () => {
  const jokeText = await getDadJokes();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};
const getDadJokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

button.addEventListener("click", addNewJokes);