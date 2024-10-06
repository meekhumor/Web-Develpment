# React

- Go to folders's path (cd) using win + cmd
- `npm create vite@latest`
- Add tailwind
- `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
- `npx tailwindcss init -p`

- `tailwind.config.js`
  ```
   content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
   ],
  ```
- `index.css`

  ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
  ```

- Make a `Component` folder in src folder
- Delete `App.css`
- Shortcut to make jsx file: `rfce`

- To run the server: `npm i vite` and `npm run dev`
