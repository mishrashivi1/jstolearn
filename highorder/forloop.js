// const num=[1,2,3,4,5];
// for (const element of num) {
//     console.log(element);
    
// }
//maps
const map=new Map();
map.set("in","india");
map.set("usa","united state of america");
map.set("fr","france")
//console.log(map);
for (const [key,value] of map) {
    console.log(key,":-",value);
//     in :- india
// usa :- united state of america
// fr :- france
}
for (const key of map) {
    console.log(key);
//     [ 'in', 'india' ]
// [ 'usa', 'united state of america' ]
// [ 'fr', 'france' ]
    }
    //for of loop doesn't used in objects
    //