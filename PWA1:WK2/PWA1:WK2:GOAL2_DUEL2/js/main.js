/*
 Name:Brittni Carter
 Date:11/7/14
 Class & Section:  PWA1-1411
Assignment: Goal1: Assignment: Duel2
 */

(function(){

    console.log("FIGHT");
//Define the dom pieces
    var fighter1_txt = document.querySelector("#ww").querySelector("p");
    var fighter2_txt = document.querySelector("#bw").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.querySelector("fight_btn");
//Click event
    button.addEventListener("click",fight,false);
//array of objects
    var fighters = [
        {
            name:"Maskman"       //index0.name
            damage:20            //index0.damage
            health:100           //index0.health

        },
        {
            name: "Paleman"      //index1.name
            damage:20            //index1.damage
            health: 100          //index1.damage
        }
    ];
var round =1;
    //Player Name (old code)
 // var playerOneName = "Maskman";
 // var playerTwoName = "Paleman";
//old code
    //player damage - max 20 taken at each round
  //  var player1Damage = 20;
    //var player2Damage = 20;

    //player health - start out with 100
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;
var player1=["Maskman",20,100]; //added health and damage to arrays
var player2=["Paleman",20,100];
   // var round=1;

    round_txt.innerHTML ="Click fight button to start!";
    fighter1_txt.innerHTML=fighters[0].name+":"+fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name+":"+fighters[1].health;

 function fight() {

        //alert(player1[0]+":"+player1[2]+"START"+player2[0]+":"+player2[2]); //start fight with alert with player names and 100 health

     fighter1_txt.innerHTML=fighters[0].name+":"+fighters[0].health;
     fighter2_txt.innerHTML=fighters[1].name+":"+fighters[1].health;

     //damage
     var f1 = Math.floor(Math.random()*fighters[0].damage+fighters[0].damage *.5); //randomizing the damage
     var f2 = Math.floor(Math.random()*fighters[1].damage+fighters[1].damage *.5);

//cause damage
     fighters[0].health-=f1;
     fighters[1].health-=f2;

     console.log(fighters[0].health,fighters[1].health);

     //for(var i=0;i < 10; i++){

      //      var minDamage1 = player1[1] * .5; //min round damage of player one with player ones health
       //     var minDamage2 = player2[1] * .5; //min round damage of player one with player ones health
       //     var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1); //randomizing the damage
         //   var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

         //   player1[2]-=f1; //player one damage
        //    player2[2]-=f2;  //player two damage

          //old code
          //  console.log(playerOneName+":"+player1[2]+""+playerTwoName+":"+player2[2]); //console log the health after rounds
            //var result = winnerCheck();
            //console.log(result); //log the results
      //winner?
     var result = winnerCheck();
     console.log(result);

     round_txt.innerHTML="round #"+round+"results";
     round++;
         if(result ==="no winner"){
                //round++;

                //alert(playerOneName+":"+player1[2]+"ROUND"+round+"OVER"+playerTwoName+":"+player2[2]); //alert that the round is over and the health of the players
            }else{
                alert(result);  //alert round results
                break; //end function
            }
        }

    }
    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="no winner";
        if(player1[2]<1&& player2[2]<1){
            result="You Both Die";
        }else if (player1[2]<1){
            result=playerTwoName+"WINS!!"; //if player1's health is the lowest then player2 wins
        }else if (player2[2]<1){
            result =playerOneName+"WINS!!";//if player2's health is the lowest then player2 wins
        }
        return result;  //return results
    }
    console.log('program starts');
    fight();

});
