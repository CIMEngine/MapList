const fs = require("fs");

const index = JSON.parse(fs.readFileSync("./index.json", "utf-8"));

let readme = "# CIM Engine map list\n\n";

let k = 1;
for (let id in index) {
  let item = index[id];
  readme += `${k++}. ${item.name} ${
    item.description ? `- ${item.description}` : ""
  } ([${id}](https://cimengine.github.io/map/?id=${id}))\n`;
}

fs.writeFileSync("./README.md", readme);
