#!/usr/bin/env -S deno run -A
import { readFile, writeFile } from "node:fs/promises";
import { $ } from "npm:zx";
import process from "node:process";
import { temporaryDirectory, temporaryWrite } from "npm:tempy";
import { join } from "node:path";
import * as core from "npm:@actions/core"
import { glob } from "npm:glob"

const path = core.getInput("path")
if ((await lstat(path)).isDirectory()) {
  [path] = await glob(join(path, "[Rr][Ee][Aa][Dd][Mm][Ee].(md|mdown|markdown)"))
}

let collection = core.getInput("collection")
if (!collection.includes(":")) {
  collection += ":latest"
}

let md = await readFile(path, "utf8");

const tempDirPath = temporaryDirectory();
$.cwd = tempDirPath;

await $`oras pull ${collection}`;
const devcontainerCollection = JSON.parse(
  await readFile(join($.cwd, "devcontainer-collection.json"), "utf8")
);
console.log(devcontainerCollection)

if (devcontainerCollection.features) {
  const featureListMD = devcontainerCollection.features
    .filter((f) => f.documentationURL)
    .map((f) => `- **[${f.name}](${f.documentationURL})** - ${f.description}`)
    .join("\n");
  console.log(featureListMD)

  md = md.replace(
    /(<!-- START_FEATURE_LIST -->)([\s\S]*?)(<!-- END_FEATURE_LIST -->)/,
    `$1\n\n${featureListMD}\n\n$3`
  );
}

if (devcontainerCollection.templates) {
  const templateListMD = devcontainerCollection.templates
    .filter((f) => f.documentationURL)
    .map((f) => `- **[${f.name}](${f.documentationURL})** - ${f.description}`)
    .join("\n");
  console.log(templateListMD)
  
  md = md.replace(
    /(<!-- START_TEMPLATE_LIST -->)([\s\S]*?)(<!-- END_TEMPLATE_LIST -->)/,
    `$1\n\n${templateListMD}\n\n$3`
  );
}

await writeFile(path, md);
