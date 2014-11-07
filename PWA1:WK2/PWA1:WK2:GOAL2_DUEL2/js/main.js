/*
 Name:Brittni Carter
 Date:11/1/14
 Class & Section:  PWA1-1411
Assignment: Goal1: Assignment: Duel1
 */

(function(){

    console.log("FIGHT");


    //Player Name
  var playerOneName = "Maskman";
  var playerTwoName = "Paleman";
//old code
    //player damage - max 20 taken at each round
  //  var player1Damage = 20;
    //var player2Damage = 20;

    //player health - start out with 100
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;
var player1=["Maskman",20,100]; //added health and damage to arrays
var player2=["Paleman",20,100];
    var round=1;

    function fight() {

        alert(player1[0]+":"+player1[2]+"START"+player2[0]+":"+player2[2]);
        for(var i=0;i < 10; i++){

            var minDamage1 = player1[1] * .5; //min round damage of player one with player ones health
            var minDamage2 = player2[1] * .5; //min round damage of player one with player ones health
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1); //randomizing the damage
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

            player1[2]-=f1;
            player2[2]-=f2;

            console.log(playerOneName+":"+player1[2]+""+playerTwoName+":"+player2[2]); //console log the health after rounds
            var result = winnerCheck();
            console.log(result); //log the results
            if(result ==="no winner"){
                round++;
                alert(playerOneName+":"+player1[2]+"ROUND"+round+"OVER"+playerTwoName+":"+player2[2]); //alert that the round is over and the health of the players
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
