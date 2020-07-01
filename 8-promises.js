const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([7,2,3])
    reject("Something went wrong");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("CATCH", error);
  });
