//requires NPM and Node or a IDE setup to run
// can install the needed NPM package with 
//      npm install date-fns

import { addHours } from 'date-fns';
 
const date = new Date('2022-06-22T12:00:00.000Z');
 
//Add 1 hour to the existing date
let newDate = addHours(date, 1);
console.log(newDate); // 2022-06-22T13:00:00.000Z
 
//Add 2 hour to the already updated date
newDate = addHours(newDate, 2);
console.log(newDate); // 2022-06-22T15:00:00.000Z
 
//Original Date Object has not been modified
console.log(date); // 2022-05-15T12:00:00.000Z
