
function palindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/\W/g,'');
  var palindrome;
  for(i=0,j=str.length-1;i<=j;i++,j--)
    {
     // console.log("\ncomparing "+str[i]+str[j]);
      if(str[i]===str[j])
        palindrome=true;
      else {
        palindrome=false;
        return palindrome;
      }
    }
   return palindrome;
}

console.log(palindrome("race Car"));