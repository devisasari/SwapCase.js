/*
Swap Case

Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 
*/

function SwapCase(str) { 
    var newChar='',
    newString='';
  
    newString = str.replace(/./g, function(myChar){
  
      if (myChar.match(/[a-z]/)){
        newChar=myChar.toUpperCase();
      } else if (myChar.match(/[A-Z]/)){
        newChar=myChar.toLowerCase();
      } else {
        newChar=myChar;
      }
  
      return newChar;
  
    });
  
    return newString; 
           
  }
  console.log(SwapCase(readline()));
  