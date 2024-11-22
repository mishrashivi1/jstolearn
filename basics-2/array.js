//array 
//we can input any kind of data
//it is shallow type-if we change in origin also get changed
const myarr=[1,2,3,4,5,6,7,8];
console.log(myarr[5]);
const a=new Array(1,2,3,4,5);
console.log(a);
a.push(7);
console.log(a);
//pop for remover
//unshift for starting
a.unshift(2);
console.log(a);
//shift for delete element from start
a.shift();
console.log(a);
//console.log(a.include("7"));
//Includes = checks true or false.
//console.log(a.Indexof(2));

//IndexOf = checks the position of value in number form.
const mynewarr=a.join();
console.log(mynewarr);
console.log(typeof(mynewarr));
//Join = converts to string.
console.log("a",a);
console.log(a);
const b=a.slice(1,3);
console.log(b);

// Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros]//spread
// console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//array to array into single array
console.log(real_another_array);
console.log(Array.isArray("Hitesh"))//check is any array
console.log(Array.from("Hitesh"))//into array
console.log(Array.from({name: "hitesh"})) // interesting
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
//single element into array