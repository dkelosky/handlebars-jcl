import handlebars from "handlebars";
import { existsSync, readFileSync, writeFileSync } from "fs";
import config from "config";
import { basename } from "path";

if (process.argv.length < 3) console.log(`usage \`${basename(process.argv[1])} <template-file>\``),process.exit(1)

const templateFile = process.argv[2];
const templateFilePath = `templates/${templateFile}`;
const outputFilePath = `out/${templateFile}`;

if (!existsSync(templateFilePath)) console.log(`${templateFilePath} does not exit`),process.exit(1)

const file = readFileSync(`templates/${templateFile}`).toString();
writeFileSync(outputFilePath, handlebars.compile(file)(config.util.toObject()))
console.log(`wrote ${outputFilePath}`);