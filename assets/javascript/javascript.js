function generateExercise(){

	var i = $(this).data('id');

	var queryURL = "https://wger.de/api/v2/exercise/"+i+"/?format=json";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})

	.done(function(response){
		var results = response.muscles;
		$('.diagram').empty();
		$('.description').empty();
		$('.youtubeArea').empty();

		console.log(results);



	})

}

generateExercise();