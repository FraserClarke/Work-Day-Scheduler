
$(document).ready(function (){
	//var dateTime = moment().format('MMMM Do YYYY, h:mm a');
			
	// moment.js variable for hours
		var currentHour = moment().hours();
 				//console.log(dateTime);
	
	// Creating function for applying css classes to past, present, future determined by time.
	$(".description").each(function() {
	var selectedHour = $(this).data("hour");
	console.log(currentHour);
	console.log(selectedHour);
	if(currentHour > selectedHour){ ///Put in function
		console.log(currentHour) ;
		$(this).addClass( "past" );				
	}
		if(currentHour < selectedHour){
		$(this).addClass( "future" );
	}
			if(currentHour === selectedHour){
			$(this).addClass( "present" );
	}

})
	//create current time. Display
	 var dateTime = moment().format('MMMM Do YYYY, h:mm a');
	 // console.log(dateTime)
	 $("#currentTime").html(dateTime);
	 
    //Logging text from savebtn, to console, then saving to local storage.

	$(".saveBtn").on("click", function(){

		//if to check if the element has a past class name
		// alert box to say "cant add events to past"
		// else
		// console.log($(this));
		var inputText = $(this).siblings(".description").val(); //grabbing value from input
		console.log(inputText);
		var currentHour = $(this).siblings(".description").attr("data-hour") //grabbing parent attribute///changed to .data

		localStorage.setItem(currentHour, inputText);		
		console.log("currentHour: ", currentHour);	
	});

		//Getting value from local storage and displaying it in description
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));	
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));



});
