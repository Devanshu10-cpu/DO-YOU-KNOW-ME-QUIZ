var readlineSync = require('readline-sync');

var score = 0
var x = 0

var userName = readlineSync.question(" What's your name ? ");

console.log("welcome " + userName + " TO DO YOU KNOW DEVANSHU ? ")

console.log("RULES OF THE GAME : YOU HAVE TO GIVE ATLEAST THREE(3) CORRECT ANSWER TO ENTER THE NEXT LEVEL")

function play(question,answer)
{
  var useranswer = readlineSync.question(question);

  if (useranswer === answer)
  {
    console.log("you are right ! ")
    score = score + 1;
  }
  else
  {
    console.log("you are wrong ! ")
  }
  console.log("your current score is " + score)
  console.log("*************************************")
}

var qlevel1 = [{
  question : `1.) where do i live ?

  a : satna
  b : bhopal
  c : shahdol  ` ,
  answer : "a"
} , {
  question : `2.) From where did i have done my graduation ? 

a : satna 
b : shahdol
c : bhopal ` , 
  answer : "c"} , {
  question : `3.) what is the name of my college ?

  a : lnct
  b : oct
  c : oist ` ,
  answer : "c"  
} , {
  question : `4.) my favourite tv series is ?

  a : sherlocke
  b : game of thrones
  c : money heist ` ,
  answer : "a"
} ];

var qlevel2 = [ {
  question : `5.) Which of the following activity do i like the most ?
  
  a : riding
  b : dancing
  c : watching movie in a theatre ` ,
  answer : "c"
} , {
  question : `6.) What is my favourite food ? 

  a : pao bhaji
  b : samosa
  c : paneer ` ,
  answer : "b"
} , {
  question : `7.) What is my favourite sport ? 

  a : football
  b : cricket
  c : badminton ` ,
  answer : "b"
} , {
  question : `8.) Which branch do i studied in college ? 
  
  a : me
  b : cs
  c : ec ` ,
  answer : "a"
}]

function levelUp()
{
	level1();
    if (score >= 3)
    {
      console.log("CONGRATS ! WELCOME TO LEVEL2")
	  } else if(score<3)  
    {
	  console.log("TRY AGAIN")
	  
	  level1();
    score = x;
    }
}
  
 function level2()
 {
    for (var i=0 ; i<qlevel2.length; i++)
    {
    play(qlevel2[i].question, qlevel2[i].answer)
    }
 }
 function level1()
 {
    for (var i=0 ; i<qlevel1.length; i++)
    {
    play(qlevel1[i].question, qlevel1[i].answer)
    }
 }

for (;;)
{
	levelUp();
	if(score>=3)
  {
	break;
	}
}
level2();

var highScore = 
{
    name: "devanshu",
    highscore: "8"
}

var userScore =
  {
    name: userName,
    highscore: score
  } ;

if (userScore.highscore == highScore.highscore)
{
  console.log("CONGRATULATIONS ! YOU HAVE BEATEN HIGH SCORE")
} 

console.log("THANKS " + userName +" FOR PLAYING THE QUIZ ")
console.log ("YOUR FINAL SCORE IS:", score)