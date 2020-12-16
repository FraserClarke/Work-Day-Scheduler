//9am - 5pm
/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

$(document).ready(function (){

	//create current time.
	 var dateTime = moment().format('MMMM Do YYYY, h:mm a');
	        //var dateTime = moment().hours();
	        //console.log(dateTime);
	$("#currentDay").append(dateTime);

    //Logging text from savebtn, to console, then saving to local storage.

	$(".saveBtn").on("click", function(){
		// console.log($(this));
		var inputText = $(this).siblings(".description").val(); //grabbing value from input
		console.log(inputText);
		var currentHour = $(this).parent().attr("id"); //grabbing parent attribute
		console.log(currentHour);

		localStorage.setItem(currentHour, inputText);


		///how  =to create it????
		console.log("currentHour: ", currentHour);
		console.log("dateTime: ", dateTime);
		var newDateTime = moment().format('h');
		console.log("newDateTime: ", newDateTime);

		if(currentHour < newDateTime){ ///Put in function
			String.replace('currentHour','');
			$(".row").cssHooks(".past");
		//textlock
		//String.replace('somevalue','') Need to turn into a number?
		//If currentHour < Newdatetime
			//orr function {if var past= <currentTime change css to css class .past.

		}
		


		/*var past= currentHour < dateTime;
		var present=currentHour === dateTime;
		var future=currentHour>dateTime;

		if past < dateTime{
			$("#id").cssHooks(".past");
		}
		*/



	});

	
	
	
	
	
	// var storage
	// $("textarea").on("click", function(event){
	    
	//     
	//     console.log();
	// });


	/*$("textarea").on("click", function(event){
	event.append(console.log);
	})
	console.log();
	/*

	// Finish up and make a completed HTML timeblock

	// i.e
	//    <div id="hour-9" class="row time-block">
	//        <div class="col-md-1 hour">
	//          9AM
	//        </div>
	//        <textarea class="col-md-10 description"></textarea>
	//        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
	//    </div>

	// Use javascript to make what is written in the <textarea> appear in the console when the button is clicked

	// Use javascript to make what is written in the <textarea> appear in the local storage

	// Use javascript to pull what is in the local storage and insert it into the corresponding time block

	// Use javascript to color time blocks according to local time


	/*var past = < dateTime;
	var present = dateTime;
	var future = >datTime;

	for (past) function {
	    if past 
	}
	/*

	//variables past present future


	/*if hours9 >dateTime
	block text , change color
	}

	//color coded blocks past present future.... if datetime <.....or if datetime true/false

	//cannot acess block if past a certain time

	//when clicking time block onclick envent lister

	//save to local storage*/

});
