const { readFile, writeFile } = require("fs");

console.log("start");
// We need to provide a callback
// So we need to the functionality completes, we run the callback.
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");

/* 
PS C:\Users\gkuke\Documents\NodeJS\tutorial> node .\app.js
<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>

If you do not provide the 'utf-8' or any other encoding, 
you get a Buffer object
*/
