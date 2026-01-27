for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(element);// 1 2 3 4 5 6 7 8 9 10    
}

//-----------------------------------------------------------------------------------

for (let outer = 1; outer <= 10; outer++) {
    const element =outer;
    console.log(element)
    for (let inner = 1; inner <=10; inner++) {
        const element2 = inner;
        console.log(outer + '*' + inner + '=' +  outer*inner);
        
        
    }
    
}


//---------------------------------------------------------------------------------------


let myArr = ["Javascript" , "React" , "Java" ]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element); //"Javascript" , "React" , "Java"
}

//break means next portion will not execute 
//continue means next portion will execute without including current value