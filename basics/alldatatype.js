// datatypes divide because of how it stored in memory
//#Premitive datatype=string,number,bigint,symbol,null,undefine,boolean
// it converstion on the copy not on original 
// #reference or non-premitive=array ,function and object it is dynamic typed
const id=Symbol('123');
const id2=Symbol('123');
console.log(id===id2);
//for big int
let ans=123456789909999n;
console.log(typeof(ans));
//array
let array=[1,2,3];
console.log(array);
//object
let obj={
    n:"a",
   age:0,

}
console.log(obj);

//function
const myfun=function aa() {
    console.log("hi");
    }
console.log(typeof myfun);
