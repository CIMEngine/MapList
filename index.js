const fs = require("fs");

async function run() {
  const index = JSON.parse(fs.readFileSync("./index.json", "utf-8"));

  let readme = "# CIMEngine map list\n\n";

  let k = 1;
  for (let id in index) {
    let item = index[id];

    if (item.external) {
      item = await (await fetch(item.external)).json();
    }

    readme += `${k++}. ${item.name} ${
      item.description ? `- ${item.description}` : ""
    } ([${id}](https://cimengine.github.io/map/?id=${id}))\n`;
  }

  fs.writeFileSync("./README.md", readme);
}

run();
