// XMLHttpRequest: Original way of sending request via javascript
// Does not support promises, so lot of callbacks!

const req = new XMLHttpRequest();

req.onload = function(){      // this will run when request run succesfully
    console.log("IT LOADED!!");
    let data = JSON.parse(this.responseText);
    console.log(data);
}
req.onerror = function(){     // this will run when request has errors
    console.log("ERROR!!");
    console.log(this);
}
req.open("GET", "https://swapi.dev/api/planets/3/")
req.send();

// Fetch API

// the newer way of making requests via JS
// Supports Promises

