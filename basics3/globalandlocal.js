//global 
var c=90
let a=100;
if(true)//local
{
    let a=90;
    const b=90;
    var c=90;
    console.log("Inner",a);
    
}
console.log(a);
//console.log(b);
console.log(c);
//note :- in ide global scope is diifferent and in console it is different
// mini hoisting and scope level//
function one()
{
    const name="abc";
    function two() {
        const email="abc@gmail.com";
        console.log(name);
         }
         //console.log(email);//error not in scope
       two();  //we need to call function else not exicuted in interpetation of code
       //for stack function call we
}
one();
//intresting-function declaration and accessing it error etc
console.log(add(2));

function add(num) 
{
return num+1;    
}

const addtwo=function (num) {
    return num+1;
}
console.log(addtwo(6));//if we call before defination it give error 
