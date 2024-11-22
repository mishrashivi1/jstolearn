//dates==object
const mydates=new Date();
console.log(mydates);//2024-11-22T15:05:15.011Z
console.log(mydates.toString());//Fri Nov 22 2024 15:05:15 GMT+0000 (Coordinated Universal Time)
console.log(mydates.toDateString());//Fri Nov 22 2024
console.log(mydates.toISOString());//2024-11-22T15:09:44.331Z
console.log(mydates.toJSON());
console.log(mydates.toLocaleDateString());///11/22/2024
console.log(mydates.toLocaleString());//11/22/2024, 3:09:44 PM
console.log(mydates.toLocaleTimeString());//3:09:44 PM
console.log(mydates.toTimeString());//15:09:44 GMT+0000 (Coordinated Universal Time)
console.log(mydates.toUTCString());//Fri, 22 Nov 2024 15:09:44 GMT
console.log(mydates.getTimezoneOffset());//0
console.log(mydates.getHours());//15
console.log(mydates.getMonth());//10

//by yourself 
const mycreated=new Date(2012,9,8);
//can add time hour etc
//in " " we can follow mm-dd-yy
//in "" we can follow yy-mm-dd
console.log(mycreated.toDateString());
//for milisecond we can use
const a=Date.now();
console.log(a);;
console.log(mycreated.getTime());
//for second
console.log(Math.floor(mycreated.getTime()/1000));//1000 to convert in second and floor remove decimal point
//get month etc
const getdate=new Date();
console.log(getdate.getDate());
//tolocalstring can further define other parameter to customize it futher











