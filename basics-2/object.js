//objects-literals and constructor
//singleten when we make using the costructor no multi intenses
const mysy=Symbol("aaaaa");
const jsuser={
    name:"aaa",
    [mysy]:"aaaaa",
    age:18,
    location:"hala",
}
console.log(jsuser.age);
console.log(jsuser["name"]);
//console.log(jsuser."age");//can't accessed
console.log(jsuser[mysy]);

//interview question add a symbol in object
//we can reassign
//if we want to lock we can by freez
//Object.freeze(jsuser);
jsuser.greeting=function () {
    console.log("hi");
    }
    console.log(jsuser.greeting);//function reference
console.log(jsuser.greeting());
jsuser.greeting2=function () {
    console.log(`hi ${this.name}`);
    }
    console.log(jsuser.greeting2());

//const tinder =new object()//singleten
const tinder={};
console.log(tinder);
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
