const core = require("@actions/core");

const generate = require("./.scripts/generate-npmrc");

async function main() {
  try {
    const token = core.getInput("token");
    const nameRepo = core.getInput("name-repo");
    const workingDirectory = core.getInput("name-repo");

    await generate(token, nameRepo, workingDirectory);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
