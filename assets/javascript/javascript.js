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

	// var reps1 = parseInt(response.data_1458502317.repData);
	// var sets1 = parseInt(response.data_1458502317.setData);
	// var weight1 = parseInt(response.data_1458502317.weightData);
 

	console.log("------------------------");
	console.log(response);
	console.log("------------------------")

	var arrayOfData = [];

	$.each(response, function(key, value) {
		
		console.log("*********");
		console.log(key);
		console.log(value);
		console.log(value.repData);
		console.log(value.setData);
		console.log(value.weightData);
		console.log(value.timeData);
		var convertedDate = moment.unix(value.timeData).format("MMM-DD-YY");
		console.log(convertedDate);
		console.log("*********");

		arrayOfData.push([convertedDate, value.repData, value.setData, value.weightData])
	})

	console.log("[][][][][][][]][][][]][][]");
	console.log(arrayOfData);

	console.log(arrayOfData.length);

	for (var i = 0; i < arrayOfData.length; i++){

		for (var k = 0; k < arrayOfData[i].length; k++) {
			console.log(arrayOfData[i][k]);

			// DATA FOR GRAPH
			//data.push(arrayOfData[i][k]);
			drawChart(arrayOfData[0][0], parseInt(arrayOfData[0][1]), parseInt(arrayOfData[0][2]), parseInt(arrayOfData[0][3]),
						arrayOfData[1][0], parseInt(arrayOfData[1][1]), parseInt(arrayOfData[1][2]), parseInt(arrayOfData[1][3]),
						arrayOfData[2][0], parseInt(arrayOfData[2][1]), parseInt(arrayOfData[2][2]), parseInt(arrayOfData[2][3]),
						arrayOfData[3][0], parseInt(arrayOfData[3][1]), parseInt(arrayOfData[3][2]), parseInt(arrayOfData[3][3])
				);
		}
		console.log("----------------")
	}
	console.log("[][][][][][][]][][][]][][]");


	// console.log(reps1);
	// console.log(sets1);
	// console.log(weight1);
	


	
		}) //.done




// 	// Print info 
// 	fitData.on("child_added", function(snapshot) {

		

// 		// If the snapshot.key is equal to the userName value 
// 		if (snapshot.key() === userName) {
	     
// 	    var userReps = snapshot.val().repData;
// 		var userSets = snapshot.val().setData;
// 		var userWeight = snapshot.val().weightData;
// 		var name = snapshot.key();




	      

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
			var selected = $('#selectedExercise').val();

			// PUSH with correct key name

			var currentDateTime = moment().format("X");
console.log(selected);

			fitData.child(userName).child('data_'+currentDateTime).set({
				repData: reps,
				setData: sets,
				weightData: weight,
				timeData: currentDateTime,
				workout: selected
				});

			
			return false;
		});	//addWorkout button


		// Google charts-----------------------------
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart(date, r, s, w, date1, r1, s1, w1, date2, r2, s2, w2, date3, r3, s3, w3) 

      {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Reps', 'Sets', 'Weight (x10)'],
          [date,  	r,      s,		w],
          [date1,  	r1,      s1,		w1],
          [date2,  	r2,      s2,		w2],
          [date3,  	r3,      s3,		w3]
          
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

