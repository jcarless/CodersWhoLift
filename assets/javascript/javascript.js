$(document).ready(function($){
function generateExercise(){

	var q = $(this).data('image');

		// var squatsmuscles = "assets/images/squatsmuscles.png"
		// var rowsmuscles = "assets/images/rowmuscles.png"
		// var deadmuscles = "assets/images/deadliftmuscles.png"
		// var benchmuscles = "assets/images/benchmuscles.png"
		// var militarymuscles = "assets/images/militarymuscles.png"
		// var crunchesmuscles = "assets/images/crunchesmuscles.png"

	var muscles = {
		squatsmuscles:"assets/images/squatsmuscles.png",
		rowsmuscles:"assets/images/rowmuscles.png",
		deadmuscles:"assets/images/deadliftmuscles.png",
		benchmuscles:"assets/images/benchmuscles.png",
		militarymuscles:"assets/images/militarymuscles.png",
		crunchesmuscles:"assets/images/crunchesmuscles.png"
	}
	// var muscles = [squatsmuscles, rowsmuscles, deadmuscles, benchmuscles, militarymuscles, crunchesmuscles];

		// $('.diagram').append("<img src='" + q + "' 	width='450px' height='350px'>")


// APPENDS DESCRIPTION TO PAGE
	var i = $(this).data('id');

	var queryURL = "https://wger.de/api/v2/exercise/"+i+"/?format=json";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})

	.done(function(response){
		var results = response;
		$('.diagram').empty().fadeOut();
		$('.description').empty().fadeOut();


		console.log(results);


		$('.description').append(response.description).fadeIn();
		console.log(muscles[q]);
		console.log("<img src='" + muscles[q] + "' width='450px' height='350px'>");
		$('.diagram').append("<img src='" + muscles[q] + "' 	width='450px' height='350px'>").fadeIn();

	})

}

$('#squats').on('click', generateExercise);
$('#deadlifts').on('click', generateExercise);
$('#benchpress').on('click', generateExercise);
$('#militarypress').on('click', generateExercise);
$('#bentoverrows').on('click', generateExercise);
$('#crunches').on('click', generateExercise);

})


// ------FIREBASE----------------------------------------

var fitData = new Firebase("https://thefitnessapp.firebaseio.com");

// Grab Text box value 
var userName = $('#userID').val().trim(); // userName VALUE REPLACE

// Search for User
$('#login').on('click', function(){
	
	// Grab Text box value 
	userName = $('#userID').val().trim(); // userName VALUE REPLACE

	// firebase api
	var queryURL = 'https://thefitnessapp.firebaseio.com/'+ userName +'.json';

	$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {

	var reps1 = response.repData;
	var sets1 = response.setData;
	var weight1 = response.weightData;

	console.log(reps1);
	console.log(sets1);
	console.log(weight1);



		}) //.done




// 	// Print info 
// 	fitData.on("child_added", function(snapshot) {

		

// 		// If the snapshot.key is equal to the userName value 
// 		if (snapshot.key() === userName) {
	     
// 	    var userReps = snapshot.val().repData;
// 		var userSets = snapshot.val().setData;
// 		var userWeight = snapshot.val().weightData;
// 		var name = snapshot.key();

// 		// Google charts-----------------------------


	      

// 			console.log(snapshot.key() + " did " + userReps + " reps and " + userSets + ' sets at ' + userWeight + ' lbs');



			

// 	}; //if function



// }) //on child_added
return false;
}) //login button

$("#addWorkout").on("click", function(){
	
			// Grab Text box value 
			var reps = $('#reps').val().trim();
			var sets = $('#sets').val().trim();
			var weight = $('#weight').val().trim();


			// PUSH with correct key name
			// console.log(userName);
			// console.log(reps);
			// console.log(sets);
			// console.log(weight);

			var currentDateTime = moment().format("X");

			fitData.child(userName).child(currentDateTime).set({
				repData: reps,
				setData: sets,
				weightData: weight
				});


			// $('#stats').html("<tr>"+
			// 			"<td>"+reps+"</td>"+
			// 			"<td>"+sets+"</td>"+
			// 			"<td>"+weight+"</td>"+
			// 			+"</tr>");

			// $('#reps').val('');
			// $('#sets').val('');
			// $('#weight').val('');

			
			return false;
		});	//addWorkout button

 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Reps', 'Sets', 'Weight (x10)'],
          ['Jan 1',  10,      4,	15],
          ['Jan 7',  12,      4,	16],
          ['Jan 14',  8,       3,	18],
          ['Jan 21',  10,      4,	21],
          ['Feb 1',  12,      5,	25],
          ['Feb 7',  15,      5,	31],
          ['Feb 7',  12,      4,	25],
          ['Feb 7',  10,      3,	19]
        ]);

        var options = {
          title: 'Workout Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      } //chart
// -----------------FIREBASE-------------------------------------------


// Generates YouTube video section


	$('.video').on('click', function(){
	$('.youtubeArea').empty().fadeOut().delay(1000);
	var p = $(this).data('playlist');
	var playlistID = p;
		APIkey = "AIzaSyBtMXG8W1P4x4ruQm8r8TjNX1gEjLDWOdo";
		baseURL = "https://www.googleapis.com/youtube/v3/";
	var queryURL = baseURL + "playlistItems?part=snippet&maxResults=10&playlistId=" + playlistID + "&key=" + APIkey + "/";

		 $.ajax({
		 	url: queryURL,
		 	method: "GET"
		 })


	$('.youtubeArea').append("<iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list="+playlistID+"' frameborder='0' allowfullscreen></iframe>").fadeIn();
});

