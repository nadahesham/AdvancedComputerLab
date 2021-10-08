
//basics of nodes:
//1st example printing a variable

/*const name = 'nada' ;
console.log(name);
*/

//2nd example on functions

/*const greet = (name) =>{

    console.log(`hello,${name}`) ;
}
greet('nada');
greet('Hesham');*/

//3rd example on global

/*console.log(global);
setTimeout(() => {
    console.log('in the timeout');
   // clearInterval(int);
  }, 3000);
*/

/*const int = setInterval(() => {
    console.log('in the interval');
  }, 1000);
  */

  //4th example on modules:
const { people, ages } = require('./people');
console.log(people, ages);


