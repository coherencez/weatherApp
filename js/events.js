var weatherReport = (function (oldWeatherReport) {
	var input = document.getElementById('cityInput'),
			submit = document.getElementById('submitButton'),
			unitSelect = document.getElementById('unitSelect'),
			forecastSelect = document.getElementById('forecastSelect');

	oldWeatherReport.addEvents = function () {
		submit.addEventListener('click', function () {
			let city = input.value,
					unit = unitSelect.value;
			weatherReport.loadCurrentWeather(city, unit);
		});

		forecastSelect.addEventListener('change', function (changeEvent) {
			let unit = unitSelect.value;
			if (this.value === 'fiveDay') {
				weatherReport.loadFiveDayForecast(unit);
			}
		});

	};
	
 return oldWeatherReport;
})(weatherReport || {});