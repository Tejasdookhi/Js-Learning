/* in promise we call as we passes object in resolve */

const promisetwo = new Promise(function(resolve , reject){
    setTimeout(function(){
       resolve({username:"Javascript" , id : 12345 , usedFor : "Fullstack"})
    } , 1000)
} )

promisetwo.then( function(user){
    console.log(user);//{ username: 'Javascript', id: 12345, usedFor: 'Fullstack' }
    
} )