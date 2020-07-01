const doWork = async () => {
  return new Error("fsfdsfas");
};

doWork()
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("Error");
  });
