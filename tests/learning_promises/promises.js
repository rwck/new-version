var promise = new Promise(function(resolve, reject) {
  if (addition(4, 12) === 17) {
    resolve("Stuf worked");
  } else {
    reject(Error("It broke"));
  }
});

function addition(num1, num2) {
  return num1 + num2;
}

promise.then(function(result) {
  console.log(result); // "Stuff worked"
}, function(err) {
  console.log(err); // Error: "it broke"
});
