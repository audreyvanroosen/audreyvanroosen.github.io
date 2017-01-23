/* 
	Conversion Formulas:
	C = (F - 32) * (5 / 9)
	F = (C * (9 / 5)) + 32
*/

$('.convertToFahrenheit').click(function() {
	var celsiusInput = $('.celsiusInput').val();
	var solutionFahrenheit = (celsiusInput * (9/5)) + 32;
	$('.solutionFahrenheit').html(solutionFahrenheit);
})

$('.convertToCelsius').click(function() {
	var fahrenheitInput = $('.fahrenheitInput').val();
	var solutionCelsius = (fahrenheitInput - 32) * (5 / 9);
	$('.solutionCelsius').html(solutionCelsius.toFixed(2));
})