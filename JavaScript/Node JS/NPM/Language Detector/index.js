const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langsCode = franc(input);
if (langsCode === "und") {
  console.log("SORRY, COULDN'T FIGURE IT OUT!".red);
} else {
  const language = langs.where("3", langsCode);
  const langName = language.name;
  console.log(langName.green);
}
