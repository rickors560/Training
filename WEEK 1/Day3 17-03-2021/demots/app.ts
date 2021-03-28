console.log("Importing Different Class and using Function\n")
import { Product } from "./Product";
function newProduct(){
     let p=new Product();
     p.Id="1";
     p.Price=200;
     p.Title="taazaa";
     p.inStock=true;
     return p;
}
let p = newProduct();
console.log(p);
console.log("\n");



console.log("\nDifferent types of Data-Types\n");
var isdone:boolean=false;
var sandeep:string="Engineer";
var ritik:string="Stud";
var list:number[]= [1,2,3];
console.log(isdone);
console.log(sandeep);
console.log(ritik);
console.log(list);
console.log("\n");



console.log("\nUsing Union and Intersection with 'type'\n");
type student={
    name:string;
    grade:number;
    age:number
}
type player={
    name:string;
    sportsname:string;
}
type sp=student & player;
type sop = student | player;
var x:sp[]=[{
    name:'Sandeep',
    grade : 7,
    age : 21,
    sportsname  : 'kabaddi'
},
{
    name:'Ritik',
    grade : 100,
    age : 21,
    sportsname  : 'basketball'
},
{
    name:'asif',
    grade : 7,
    age : 25,
    sportsname  : 'nothing'
}]
var y:sop[]=[{
    name:'Arpit',
    grade : 3,
    sportsname  : 'criket'
},
{
    name:'Harsh',
    age : 21,
    sportsname  : 'chess'
},
{
    name:'Harshit',
    grade : 7,
    age : 2
}]
function prints(t:sp[]|sop[]){
    t.forEach((t1)=>{
        console.log(t1);
    })
    console.log("\n");
}
prints(x);
prints(y);