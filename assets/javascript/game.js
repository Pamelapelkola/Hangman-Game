

//variables//

const wordsArray = ['Cinderella', 'Bangles', 'Poison'];
let winCounter = 0;
let wrongLetter = [];
let guessesLeftCounter = 20;
let guesses = [];
let underscores = [];
let newWord =wordsArray[Math.floor(Math.random() * wordsArray.length)];

//functions
function startGame(){
newWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

console.log(newWord);
}

for (let i = 0; i < newWord.length; i++){
underscores.push('_');
}
document.getElementById('placeholder').innerHTML = underscores.join(" ");

wrongLetter = [];
guessesLeftCounter = 20;

document.getElementById('guesses-left').innerHTML = guessesLeftCounter;

function results(){
 if (winCounter === newWord.length){
    alert('winner')
   startGame()
  }else(guessesLeftCounter === 0);{
    alert('you lose');
    startGame()
 }
  

document.onkeyup = function(event){
guesses = guesses + event.key;
console.log(event.key)
document.getElementById("guesses").innerhtml = guesses
if(newWord.indexOf(guesses) > -1)
{
for (var i = 0; i < newWord.length; i++)
{
  if(newWord[i] === guesses)
  {
  underscores[i] = guesses;
  console.log(underscores);
  winCounter ++
  results()
  }
}
}
  else (newWord[i] != guesses);{
  wrongLetter.push(guesses);
  guessesLeftCounter --;
  console.log(guessesLeftCounter);

 results()}
  }
}

//main
startGame()
  
 // document.onkeyup = function(event)
 

  //if(newWord === guesses){
    //underscores[i] = guesses;
   // winCounter ++
  //  result()
   // return;
  //}
  //}
  //if(newWord != guesses){}
  //wrongLetter.push(guesses);
  //guessesLeftCounter --
 // result()

