const inquirer = require("inquirer");

module.exports = {
  path: () =>
    inquirer.prompt([
      {
        type: "input",
        message: "Enter file path and name (with .csv):",
        name: "path",
      },
    ]),
  keyValidation: (headers, key) =>
    inquirer.prompt([
      {
        type: "list",
        choices: headers,
        message: `What is your ${key} colum name?`,
        name: key.replace("_", ""),
      },
    ]),
};
