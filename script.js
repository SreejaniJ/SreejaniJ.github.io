var factList = [
"Nearly 30 states still have a luxury or tampon tax on menstrual products","According to an Always survey, Period Poverty can affect mental health(About 39% claimed this)","According to an Always survey, Period Poverty can affect mental health(About 39% claimed this)","The average person will get around 450 periods in their lifetime.","An average person will spend around $1,800 worth of tampons in their life."];

/*3*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
if (count == factList.length){
 count = 0;
    }
  } 
