const demoJsonObj = {
  mission: "CreateJsonStringify",
  timeToComplete: 10,
  useExistingFunction: false,
  reasons: ['Inquisitive','Masochist','Bragging Rights'],
  toolsAllowed:{
    language: "JavaScript",
    enhancer: "Coffee",
    motivation: "Binaural Beats",
    alternativeMethod: "Youtube - Check out my video tutorial"
  }
};

console.log(JSON.stringify(demoJsonObj));
// Output
//{"mission":"CreateJsonStringify","timeToComplete":10,"useExistingFunction":false,"reasons":["Inquisitive","Masochist","Bragging Rights"],"toolsAllowed":{"language":"JavaScript","enhancer":"Coffee","motivation":"Binaural Beats","alternativeMethod":"Youtube - Check out my video tutorial"}}


function isStr(val){
    return typeof val === 'string';
}

function isNum(val){
 return typeof val === 'number';
}

// when checking a object we must ensure it is not null and not an array. Both null & Array has typeof object in JS
function isObj(val){
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

// We need to check that it is an Array and also of type object

function isArray(val){
    return Array.isArray(val) && typeof val === 'object';
};

function isBool(val){
  return typeof val === 'boolean';
}

function isNull(val){
    return typeof val === 'string';
}

function CustomJsonStringify(obj){

 //check if it is string
  if(isStr(obj) ===true){
    return `"${obj}"`
  }
  if( isNum(obj) || isBool(obj)){
    return `${obj}`;
  }

  if(isArray(obj)){
    let arrayString = "";
    obj.forEach((val) => {
      arrayString += CustomJsonStringify(val);
      arrayString +=','
     });

    return `[${arrayString.replace(/,*$/, '')}]`;
  }




  // loop through each item in the object and handle it
  if(isObj(obj)){

        let objectString = ""; 
        let keys = Object.keys(obj);

    keys.forEach((key) => {
      let val = obj[key];
      objectString += `"${key}":${CustomJsonStringify(val)},`;

     });
     return `{${objectString.replace(/,*$/, '')}}`;

    }
  }


console.log(CustomJsonStringify(demoJsonObj));
