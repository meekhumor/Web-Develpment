const form = document.querySelector("#SearchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //   console.dir(form);
  const searchTerm = form.elements.query.value;
  const config = {params: {q: searchTerm}}
  const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows`, config);

  //   console.log(res.data.image.medium); use this method to find image location

  // makeImages(res.data);
  console.log(res.data);
  form.elements.query.value = '';
});

const makeImages = (shows) => {  // API fault it can't iterate
  for(let result of shows){
    if(result.image){
      const img = document.createElement('IMG');
      img.src = result.image.medium;
      document.body.append(img)
    }
  }
}