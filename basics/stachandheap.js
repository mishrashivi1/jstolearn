//stack primitive type and non-refrence
let user1="ab";
let user2=user1;
user2="bc";
console.log(user1);
console.log(user2);
//heap non-primitive
let user3={
    email:"anbcxx",
    pass:"etyng",
}
let user4=user3;
user4.email="dgjjgffjj";
console.log(user3);
console.log(user4);


