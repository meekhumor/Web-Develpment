- Go to folders's path (cd)
- Install Express EJS: npm i express ejs
- Express JS boilerplate:

  ```
  const express = require('express');
  const app = express();

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))

  app.get("/", (req, res) => {
      res.render("index");
  });

  app.listen(3000)

  ```

- Create "views" folder containing ejs files
- Create "public" folder containing images, stylesheets, scripts folders
- Run the server: npx nodemon index.js
- Open http://localhost:3000/ in your browser


## Express Generator 

- Open terminal
- Install Express Generator: npm i express-generator -g
- Create a new project: express projectname --view=ejs
- Run the server: cd projectname && npm i
- Run the server: npx nodemon (dont change js name)
- Open http://localhost:3000/ in your browser
