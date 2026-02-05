const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", pass: 123 });
    } else {
      reject("Error : JS went wrong");
    }
  }, 1000);
});

async function consumePromsefour() {
  try {
    const response = await promisefour;
    console.log(response);
  } catch (error) {
    console.log(error);//Error : js went wrong
  }
}
consumePromsefour();
