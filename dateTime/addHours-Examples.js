
function addHours(dateObj, hours){
   //We create a new Date Object so that we dont alter the one passed into the function (this is a pure function )
   const dateUpdated = new Date(dateObj.getTime());
   dateUpdated.setHours( dateUpdated.getHours() + hours);
   return dateUpdated;
}
 
 
const dateDemo = new Date('2022-06-22T12:00:00.000Z'); 
console.log(dateDemo); //2022-06-22T12:00:00.000Z
 
let dateModified = addHours(dateDemo,1)
console.log(dateModified); //2022-06-22T13:00:00.000Z
 
dateModified = addHours(dateDemo,3); //Original Date is not modified
console.log(dateModified); //2022-06-22T15:00:00.000Z
 
dateModified = addHours(dateModified,3)
console.log(dateModified); //2022-06-22T18:00:00.000Z

