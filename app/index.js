import { promises as fs } from "fs";

fs.readFile("./package.Json")
  // then is for resolved/ Fulfilled promise
  .then((fileContents) => {
    fs.writeFile("./test.Json", fileContents);
  })
  .then(() => {
    console.log("Finished writing the file.");
  })
  .then(() => fs.readFile("./test.Json", "utf-8"))
  .then((testFileResults) => {
    console.log(testFileResults);
  })
  // catch errors for REJECTED PROMISE
  .catch((err) => {
    console.log.error(`Error while reading file, ${err.message}`);
  })
  .finally(() => {
    console.log("This will run no matter. this promise has been SETTLED");
  });
