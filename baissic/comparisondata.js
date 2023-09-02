console.log(null>0); /*false */
console.log(null == 0); /*false*/
console.log(null >= 0); /*true 
because comparison and equality chec wors differently, 
comparison converts null to number , treating it as 0 */

console.log("2" == 2); //true because of appearance as only value matters
console.log("2" === 2); //false because of value
