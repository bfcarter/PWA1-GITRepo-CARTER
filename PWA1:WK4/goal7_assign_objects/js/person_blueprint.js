/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){
    window.Person=Person;

    Person.jobs = ["Lawyer","Doctor","Singer","Dancer","Teacher"];
    Person.actions = ["Singing","Dancing","Talking","Eating","Sleeping"];
    function Person(name,row){
        console.log("Person Created:",name);

        this.name = name;
        this.action =Person.actions[Math.floor(Math.random()*Person.actions.length)];
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
        this.row = row;

        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }
    Person.prototype.update = function(){
        if(Math.floor(Math.random()<01.)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.action[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
}