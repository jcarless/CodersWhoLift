
// function generateExercise(){

// 	// var q = $(this).data('image');

// 	// var squatsmuscles = "assets/images/squatsmuscles.png"
// 	// var rowsmuscles = "assets/images/rowmuscles.png"
// 	// var deadmuscles = "assets/images/deadliftmuscles.png"
// 	// var benchmuscles = "assets/images/benchmuscles.png"
// 	// var militarymuscles = "assets/images/militarymuscles.png"
// 	// var crunchesmuscles = "assets/images/crunchesmuscles.png"

// 	// var muscles = ["squatsmuscles", "rowmuscles", "deadmuscles", "benchmuscles", "militarymuscles", "crunchesmuscles"];





// // APPENDS DESCRIPTION TO PAGE
// 	var i = $(this).data('id');

// 	var queryURL = "https://wger.de/api/v2/exercise/"+i+"/?format=json";

// 	$.ajax({
// 		url: queryURL,
// 		method: 'GET'
// 	})

// 	.done(function(response){
// 		var results = response;
// 		$('.diagram').empty();
// 		$('.description').empty();
// 		$('.youtubeArea').empty();

// 		console.log(results);

// 		$('.description').append(response.description);

	

// 	})

// 		// $(".diagram").append("<img src=>");
// };

// $('#squats').on('click', generateExercise);
// $('#deadlifts').on('click', generateExercise);
// $('#benchpress').on('click', generateExercise);
// $('#militarypress').on('click', generateExercise);
// $('#bentoverrows').on('click', generateExercise);
// $('#crunches').on('click', generateExercise);




// ------FIREBASE---------------

// var fitData = new Firebase("https://thefitnessapp.firebaseio.com");

// Search for User
$('#login').on('click', function(){
	
	console.log('test');
	// Grab Text box value 
	// var textbox = $('#userID').val().trim(); // TEXTBOX VALUE REPLACE
// console.log(textbox);
// 	// Print info 
// 	fitData.on("value", function(snapshot) {

// 		// If the snapshot.key is equal to the textbox value 
// 		if (snapshot.key() == textbox) {

// 			// RUN THIS CODE
// 			console.log(snapshot.key() + " is " + snapshot.val().height + " meters tall");
// 		}

// 	});

return false;
});




// $("#addWorkout").on("click", function(){
	

// 	// Grab Text box value 
// 	var user = $('#userID').val().trim();
// 	var height = $('#height').val().trim();

// 	// PUSH with correct key name
// 	fitData.child(user).set({
// 		userID: user,
// 		height: height
// 	})
// });








