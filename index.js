const fs = require("fs");

const index = JSON.parse(fs.readFileSync("./index.json", "utf-8"));

let readme = "# CIM Engine map list\n\n";

for (let id in index) {
  let item = index[id];
  readme += `## ${item.name} ${
    item.description ? `- ${item.description}` : ""
  } ([${id}](https://cimengine.github.io/map/?id=${id}))\n\n`;
}

fs.writeFileSync("./README.md", readme);
