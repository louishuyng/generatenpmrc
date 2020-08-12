const core = require("@actions/core");
const artifact = require("@actions/artifact");

const generate = require("./.scripts/generate-npmrc");

try {
  const token = core.getInput("token");
  const nameRepo = core.getInput("name-repo");

  generate(token, nameRepo);

  const artifactClient = artifact.create();
  const artifactName = "louis-artifact";
  const files = [".npmrc"];

  const rootDirectory = "."; // Also possible to use __dirname
  const options = {
    continueOnError: false,
  };

  artifactClient.uploadArtifact(
    artifactName,
    files,
    rootDirectory,
    options
  );
} catch (error) {
  core.setFailed(error.message);
}
