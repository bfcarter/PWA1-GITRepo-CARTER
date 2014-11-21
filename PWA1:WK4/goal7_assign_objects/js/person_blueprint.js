/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){
    window.Person=Person; //global window object

    Person.jobs = ["Lawyer","Doctor","Singer","Dancer","Teacher"]; //all possible job options
    Person.actions = ["Singing","Dancing","Talking","Eating","Sleeping"]; //all possible action options
    function Person(name,row){
        console.log("Person Created:",name);

        this.name = name;
        this.action =Person.actions[Math.floor(Math.random()*Person.actions.length)]; //random action for each person
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];  //random job for each person
        this.row = row; //direction of where the code goes

        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action; //showing the action on the page
    }
    Person.prototype.update = function(){  //pulled to the main.js to change the action
        if(Math.floor(Math.random()<01.)){
            var i = Math.floor(Math.random()*Person.actions.length); //randomize the action
            this.action = Person.action[i];
            var id = document.getElementById("r"+this.row+"c3"); //pull the information from which row and column
            id.innerHTML=this.action;
        }
    }
});