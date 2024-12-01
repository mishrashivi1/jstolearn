const mynum=[1,2,3];
// const mytotal=mynum.reduce(function (acc,curr)
// {
//     return acc+curr;
// },0);
const mytotal=mynum.reduce((acc,curr)=>
{
    return acc+curr;
},0)
console.log(mytotal);
