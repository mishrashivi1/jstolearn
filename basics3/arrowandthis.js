const user= {
     username : "abc",
    price :2789,
    welcome:function()
    {
     console.log(`${this.username}, welcome!`);
     //console.log(this);// {username: 'abc', price: 2789, welcome: [Function: welcome] }
     
    }
    
}
console.log(user.welcome());
user.username="adh";
console.log(user.welcome());
console.log(this);//{}//if we run in browser that give window funtion

// function chai() {
//     const name="abc";
//     //console.log(this);
//     console.log(this.name);//undefine this function used in object mainly
    
// }
// chai();//to much detail etc

// const ans=function()
// {
//     const name="abc";
//     //console.log(this);
//     console.log(this.name) //undefine
// }
// ans();
//arrow function
// const ans=()=>
// {
//     const name="abc";
//     //console.log(this);//{}
//     console.log(this.name) //undefine
// }
//ans();
//declairation
const ans=(a,b)=>
    {
       return a+b;//explecit function
    }
console.log(ans(2,3));
//another use of this function:==implesite function
const a= (a,b)=> a+b
//when we use {} then we need return else we can write normally and ()
console.log(ans(3,4));
const b=()=>({username:"abc"})
console.log(b());//abc

//for object return we need to ({}) without it gives undefine

    