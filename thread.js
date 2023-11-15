const crypto = require("crypto");
const start = Date.now();

//we have only 4 threads so we see that 4 are executed parallel and the other  4 are executed after the first fours
async function getEncrypted() {
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Time taken:", Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Time taken:", Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Time taken:", Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Time taken:", Date.now() - start, "password encrypted");
  });
}

getEncrypted();

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, key) => {
  console.log("Time taken:", Date.now() - start, "5th one password encrypted");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log("Time taken:", Date.now() - start, "5th one password encrypted");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log("Time taken:", Date.now() - start, "5th one password encrypted");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log("Time taken:", Date.now() - start, "5th one password encrypted");
});

//Time is in milliseconds
