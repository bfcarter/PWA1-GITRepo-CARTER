/*
 Name:Brittni Carter
 Date:11/19/14
 Class & Section:  PWA1-1411
 Assignment: objects.Person
 main code
 */

(function(){
    //naming variables
    var numOfPeople = 3; //number of people to be displayed
    var people =[]; //selected people from names
    var names = ["Brittni", "Esther", "Jethro", "Chris", "Xantheia"]; //Names to be displayed
    var interval; //timeframe for rotation
    for(var i = 0; i < numOfPeople ; i++){  //for loop to display the information for three people
        var personIndex = Math.floor(Math.random()*names.length); //randomizing the names

        var person = new Person(names[personIndex],i+1);
        populateHTML(person.name,"r"+(i+1)+"c1"); //displays name
        populateHTML(person.job,"r"+(i+1)+"c2");  //displays job

        people.push(person); //adds
        names.splice(personIndex,1); //subtracts
    }
    clearInterval(interval);
    interval=setInterval(runUpdate,1000/30); //every 30 seconds the action will change
    function populateHTML(data,field){      //displays the random activities
        var id=document.getElementById(field);
        id.innerHTML=data;
    }

    function runUpdate() {
        people.forEach(function(element){  //function that kicks in after all instances have been used to keep the process moving
            element.update();
        });
    }
})();
