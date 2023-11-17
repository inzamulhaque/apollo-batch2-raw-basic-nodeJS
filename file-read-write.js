const fs = require("fs");

// const readFile = fs.readFileSync("./text/read.txt", "utf-8");

// const writtenFile = fs.writeFileSync(
//   "./text/write.txt",
//   "this is written file. " + readFile
// );

// console.log(readFile);

fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err);
  }

  // console.log(data);

  fs.writeFile("./text/write2.txt", `this is written file-2 ${data}`, (err) => {
    if (err) {
      throw err;
    }
  });
});
