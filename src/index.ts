
/*
function greet(firstName:string){
    console.log("Hello " + firstName);
}

greet("shatadal");
*/

/*

function sum(a:number,b:number){
    return a+b;
}
let ans = sum(1,2);
console.log(ans);*/
/*

function isLegal(age:number){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal(2));*/

/*

function delayedCall(fn:()=>void){
    setTimeout(fn,1000);
}

delayedCall(()=>{
    console.log("1 second has passed");
});*/

/*
let greet = () =>{
    console.log("Hello");
}

*/

/*
function greet(user:{
    name:string,
    age:number
}){
    console.log("hello " + user.name);
}
let user = {
    name : "shatadal",
    age : 20
}
greet(user);

*/


/*
interface UserType{
    firstname : string,
    lastname : string,
    age : number
}

function greet(user:UserType){
    console.log("hello " + user.firstname + " " + user.lastname);
}

let user = {
    firstname : "shatadal",
    lastname : "samui",
    age : 20
}
greet(user);


 */


/*TYPES IN TYPESCRIPT*/



type Employee = {
    name : string ;
    startDate : string ;
}

type Manager = {
    name : string ;
    department : string ;

}


type TeamLead = Employee & Manager;

let e:Employee = {
    name : "shatadal",
    startDate : "2024"
}

let m : Manager = {
    name : "John",
    department : "Technology"
}

let t:TeamLead = {
    name : "harkirat",

    startDate : "2024",

    department:"technology"
}
/*------------------------------------------------------------------------------------------------------------*/
type GoodUser =  {
    name : string ,
    gift : string
}

type BadUser={
    name :string ;
    ip : string
}

type User = GoodUser | BadUser;
const user : User = {
    name : "shatadal",
   /* ip : "asasas",*/
    gift : "34234324"
}





















































