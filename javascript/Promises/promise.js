/*promise created with varible declared = new Promise(function(resolve,reject){log})

variable.then reflects to resolve part in promise 
we also have to call resolve in promise as resolve()*/

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise One after one sec");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Resolve promise one");
});

//****************************************************************** */
//here without storing in a variable

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise 2");
  }, 2000);
}).then(function () {
  console.log(" Promise 2 consumed");
});
