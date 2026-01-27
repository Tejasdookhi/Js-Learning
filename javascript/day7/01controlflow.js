const age = 18;
if (age > 18) {
    console.log("Can vote");
    
} else if (age == 18) {
   console.log("You are 18 you can vote");
      
}
else {console.log("Cant vote")}


//-------------------------------------------------------------------------

const reactDeveloper = true;
const knowJs = true;

if (reactDeveloper && knowJs) {
    console.log("You can become a fullstack dev.");
     
} else {
    console.log("Cannot become fullstack dev.");
    
    
}

//--------------------------------------------------------------------------------


if (reactDeveloper || knowJs)//at least one candition cab be true if knowJs will be false then also it will print same 
 {
    console.log("You can develope frontend.");
     
} else {
    console.log("You cannot develope frontend.");
    
    
}


