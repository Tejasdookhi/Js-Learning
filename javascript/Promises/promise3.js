/* first we use chaining of promises using .then() with resolve(),
which have some object stored in it ,
 */

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; //if value false
    /* then output : { username: 'Javascript', shortcut: 'Js' }
                      Javascript
                      Ye toh hona hi hai
   
      if value true : Error : Something went wromg
                   Ye toh hona hi hai
   
    */
    if (!error) {
      resolve({ username: "Javascript", shortcut: "Js" });
    } else {
      reject("Error : Something went wromg");
    }
  });
}, 1000);
promisethree
  .then(function (user) {
    console.log(user); //{ username: 'Javascript', shortcut: 'Js' }
    return user.username;
  })
  .then((username) => {
    console.log(username); // javascript
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Ye toh hona hi hai");
  });
