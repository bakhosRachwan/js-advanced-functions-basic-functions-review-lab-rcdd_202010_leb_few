function saturdayFun(activity="roller-skate"){
  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dag");

function mondayWork (activity="go to the office"){
  return (`This Monday, I will ${activity}.`);
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair="*"){
  return function(type="special"){
    return (`You are ${flair}${type}${flair}!`)
  }
}

let Calculator={
  Calculator,
 add: function add(a, b){return (a+b);},
 subtract: function subtract(a, b){return (a-b);},
 multiply: function multiply(a, b){return (a*b);},
 divide: function divide(a, b){return (a/b);}
}




function actionApplyer(start, arr){
  if (arr.length === 0){
    return start
  }
  else{
    
    let result = arr[2](arr[1]( arr[0](start)))
      
    
    return (result)
  }
}