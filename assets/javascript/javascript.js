$(document).ready(function($){
function generateExercise(){

	var q = $(this).data('image');

	var squatsmuscles = "assets/images/squatsmuscles.png"
	var rowsmuscles = "assets/images/rowmuscles.png"
	var deadmuscles = "assets/images/deadliftmuscles.png"
	var benchmuscles = "assets/images/benchmuscles.png"
	var militarymuscles = "assets/images/militarymuscles.png"
	var crunchesmuscles = "assets/images/crunchesmuscles.png"

	var muscles = [squatsmuscles, rowsmuscles, deadmuscles, benchmuscles, militarymuscles, crunchesmuscles];

	$('.diagram').append("<img src='"+muscles[q]+"'>");


// APPENDS DESCRIPTION TO PAGE
	var i = $(this).data('id');

	var queryURL = "https://wger.de/api/v2/exercise/"+i+"/?format=json";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})

	.done(function(response){
		var results = response;
		$('.muscles').empty();
		$('.description').empty();
		$('.youtubeArea').empty();

		console.log(results);


		$('.description').append(response.description);
		$('.muscles').append("<img src='"+muscles[q]+"'width='450px' height='350px'>")

	})

}

$('#squats').on('click', generateExercise);
$('#deadlifts').on('click', generateExercise);
$('#benchpress').on('click', generateExercise);
$('#militarypress').on('click', generateExercise);
$('#bentoverrows').on('click', generateExercise);
$('#crunches').on('click', generateExercise);

})