//immediately invoked function expressions(iife)
//it used to the fuction don't get palluted by global variable
//when we want to add the data in database when it start
(
    function chai() {
        console.log("dbms connected");
        
    }
)();//name iife

((parameter)=>
{
    console.log(`dbms second ${parameter}`);
    
})("hi")//simple iife