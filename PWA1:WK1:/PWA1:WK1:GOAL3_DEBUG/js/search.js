
/*
 Name:Brittni Carter
 Date:11/2/14
 Class & Section:  PWA1-1411
 Assignment: Goal1: Assignment: Buggy Search Engine
 */


// Create privatized scope using a self-executing function
(function(){                // Self- executing function

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,  //search input area is empty
		currentSearch = ''                      // unused variable - no data has been searched yet
	;

	// Validates search query
	var validate = function(query){    //var name spelled wrong - changed it. change == to =

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                   //while loop to make sure search query is appropriate - added ==
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === "") {    //while loop
            query = query.substring(0, query.length - 1); //query length equal to
        }    // added bracket


		// Check search length, must have 3 characters
		if(query.length < 3){                           //must have 3 characters
			alert("Your search query is too small, try again.");   //missing " at the end (added it) - alerting user that whatever they typed in was too small

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return; //return
		}

		search(query);
	};

	// Finds search matches
	var search = function(query){      //{ was missing from function - search function


		// split the user's search query string into an array
		var queryArray = query.join(" ");  //breaks down the words used for searching - searching each word - changed to =

		// array to store matched results from database.js
		var results = []; //the results variable

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {            //search through database for a match

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|'); //end title with |
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //lowercase video title

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {     //for loop for
                var qitem = queryArray[ii].tolowercase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem); //search keywords in the title of video
                // then push to results
                if (compare !== -1) {                 // if loop to compare results
                    results.push(db[i]);            //results from database if matches for keywords
                };


            };

        };

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();          //no matches go to noMatch function
		}else{
			showMatches(results); //if there are matches, show them
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                   //function for no match in search
		var html = ''+
			'<p>No Results found.</p>'+  //no results found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //tell the user to try change their search
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){        //results function

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //Hyperlinked results
			title,                  //listed title then url
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){           //for loop for the search results

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');               //Have a | after the title
			title = results[i].subString(0, titleEnd);        //find the title

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //find the url for the video

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //show videos in search with url and title
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query);            //spelling error

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false; // the function is false
    };              // add curly brace

})();