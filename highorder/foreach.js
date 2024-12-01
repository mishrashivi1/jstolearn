const programming=["js","cpp","ruby","python","java"];
// programming.forEach(function (params) {
//     console.log(params);
    
// })
// programming.forEach( (params)  =>{
//     console.log(params);
    
// })
// function print(item) {
//     console.log(item);
    
// }
// programming.forEach(print);
//  programming.forEach( (params,index,programming)  =>{
//         console.log(params,index,programming);
//         //js 0 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
// cpp 1 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
// ruby 2 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
// python 3 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
// java 4 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
 //   })
const myprogram=[
    {
      file:"java",
      filename:"java",
    },
    {
        file:"python",
        filename:"py",
    },
    {
        file:"c++",
        filename:"cpp",
    }
]
myprogram.forEach((items)=>
{
    console.log(items.filename);
    
})
//for each doesn't return anything