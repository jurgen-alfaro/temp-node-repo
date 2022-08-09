const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// FIRST ARG = a path
// SEC ARG   = the content of the file
// If the file is not there, node will create it.
// If it is, Node will override all the content
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the this task");
console.log("starting the next one");
