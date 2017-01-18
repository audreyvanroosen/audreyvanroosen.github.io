// 1. Store your current age into a variable

// var currentAge = document.getElementById('age').value;

// 2. Store a maximum age into a variable

// var maximumAge = document.getElementById('max-age').value;

// 3. Store a favorite drink (from a drop-down) into a variable

// var favoriteDrink = document.getElementById('item').value;

// 4. Store an amount per day into a variable

// var amountPerDay = document.getElementById('num-per-day').value;

// 5. Calculate how much you would drink for the rest of your life!

document.getElementById('click-me').onclick = calculateDrinks;

function calculateDrinks () {
	var currentAge = document.getElementById('age').value;
	var maximumAge = document.getElementById('max-age').value;
	var favoriteDrink = document.getElementById('item').value;
	var amountPerDay = document.getElementById('num-per-day').value;
	var lifetimeDrinks = (maximumAge - currentAge) * 365 * amountPerDay;
	document.getElementById('solution').innerHTML = lifetimeDrinks;
	document.getElementById('drink').innerHTML = favoriteDrink;
}

// 6. Output your results to the user