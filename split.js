function calculateExp(){
const bill = parseFloat(document.getElementById('bill').value );
const tip = parseFloat(document.getElementById('tip').value || 0 );
const person = parseInt(document.getElementById('person').value );

//if  bill amount or person or tip bw lower than 0;

if( bill <=0 || tip <=0 || person <=0 || isNaN(bill) || isNaN(person) ){
    document.getElementById('result').textContent = "Please Enter a valid input";
    return;
};
const per = bill + tip / person ; 

 document.getElementById('result').textContent = `Each person pays: ₹${per.toFixed(2)}`;

};