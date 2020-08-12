const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const promisedHandlebars = require("promised-handlebars");
const Handlebars = promisedHandlebars(require("handlebars"));

function renderTemplate() {
  const template = fs.readFileSync(
    path.resolve(__dirname, "npmrc.template.hbs"),
    "utf-8"
  );
  return Handlebars.compile(template);
}

async function generate(key, name) {
  const dirPath = path.resolve(__dirname, "..");
  const template = await renderTemplate()({
    key,
    name,
  });

  fs.writeFile(dirPath + "/github/workspace/.npmrc", template, (err) => {
    if (err) {
      console.log(err);
      process.exit(0);
    } else {
      console.log(chalk.yellow("💫  npmrc generated"));
    }
  });
}

module.exports = generate;
