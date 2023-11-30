/*
1-To be able to operate an variable,it is important to know something about the types of datais called datatype.
2-JS has 7 type of datatype-
i.number
ii.bigint
iii.string
iv.boolean
v.null
vi.undefined
vii.symbol
*/
let name="Janmejaya";
let age=22;
let ispresent=true;
let address
let mark=null;
console.log(typeof (name));
console.log(typeof(age));
console.log(typeof(ispresent));
console.log(typeof address);
console.log(typeof mark);
let id=Symbol('123');
let aid=Symbol('123');
console.log(id===aid);