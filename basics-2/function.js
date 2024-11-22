function myfun() {
    console.log("first function of js");
    
}
myfun();
//function with parameters
function add(num1,num2) {
console.log(num1+num2);
    
}
add(4,5);
//storing answer in new variable
const answer=add(4,5);
console.log(answer);//we don't get value because of no return type 
function add2(num1,num2) {
    let result=num1+num2;
    return result;
        }
        const answer1=add2(4,5);
        console.log(answer1);
        //reset operator
        function r(...num1)
        {
            return num1;
        }
console.log(r(2));
console.log(r(2,3,4,5,6));//2
//so we use in paarmeter(...num1)
//if we have multiple parameter and similiar arrgument than rest will be reset
//object in function and we can use array in fuction.