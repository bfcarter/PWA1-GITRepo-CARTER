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

    //player damage - max 20 taken at each round
    var player1Damage = 20;
    var player2Damage = 20;

    //player health - start out with 100
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round=1;

    function fight() {

        alert(playerOneName+":"+playerOneHealth+"START"+playerTwoName+":"+playerTwoHealth);
        for(var i=0;i < 10; i++){

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth);
            var results = winnerCheck();
            console.log(results);
            if(results ==="no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"ROUND"+round+"OVER"+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break;
            }
        }

    }
    function winnerCheck(){
        console.log("in winnerCheck FN");
        var results="no winner";
        if(playerOneHealth<1&& playerTwoHealth<1){
            result="You Both Die";
        }else if (playerOneHealth<1){
            result=playerTwoName+"WINS!!"
        }else if (playerTwoHealth<1){
            result =playerOneName+"WINS!!"
        }
        return result;
    }
    console.log('program starts');
    fight();

});
