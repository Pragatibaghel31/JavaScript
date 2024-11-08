"use Strict"// treat all JS Code as newer version

//alert(3+3) // we are using node.js not browser


// number => 2 to power 53
// bigint
// string =>
// boolean => true/false
// null => standalone value
// undefined => if data is not yet filled it will show undefined as output
// symbol => unique

// object 
console.log(typeof undefined);// undefined
console.log(typeof null);// object

// Datatype conversion cofusion
let score ="33"

console.log(typeof score);
console.log(typeof (score));

let Value= Number(score)
console.log(typeof Value);
console.log(Value);

let val=null
console.log(typeof val);
console.log(typeof (val));


let val1=undefined
console.log(typeof val1);
console.log(typeof (val1));


let val2=true
console.log(typeof val2);
console.log(typeof (val2));


let val3="Pragati"
console.log(typeof val3);
console.log(typeof (val3));

// "33"=>33
// "33abc"=>NaN
// true => 1; false =>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0=>false
// ""=>false
//"Pragati" => true

let somenum=33
let stringnum=String(somenum)
console.log(stringnum);
console.log(typeof stringnum);

// ************************ Operations **********************
let num=3
let negnum= -num
console.log(negnum);

console.log(+true);
console.log(+"");

console.log("2">1);
console.log("02">1);// dont allow in typeScript
console.log(null>0);
console.log(null==0);
console.log(null>=0);// the reason is that an equality check == and comparisons > < >= <= work differently
//comparisons covert null to a number treating it as 0.
// thats why (3)null >=0 is true and  (1) null>0 is false.
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);




