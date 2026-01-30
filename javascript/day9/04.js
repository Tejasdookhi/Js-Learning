//.forEach(()=>{});

const arrStr = ["js", "ruby", "react", "css"];

arrStr.forEach((items) => {
  console.log(items); // js ruby react css *****more prefered ()=>{}
});

arrStr.forEach(function (nextitems) {
  console.log(nextitems); // js ruby react css same prefered arrow function ()=>{}
});

arrStr.forEach((items, index, arr) => {
  console.log(items, index, arr); // js ruby react css *****more prefered ()=>{}
});

//-----------------------------------------------------------------------------

let arrayInObjects = [
  { language: "javscript", extention: "js" },
  { language: "python", extention: "py" },
  { language: "c++", extention: "cpp" },
  { language: "kotlin", extention: "kt" },
];
arrayInObjects.forEach((myvalue)=>{
    console.log(`Language ${myvalue.language} extention is ${myvalue.extention}`);
})
/* Prints :
Language javscript extention is js
Language python extention is py
Language c++ extention is cpp
Language kotlin extention is kt
 */
