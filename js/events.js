var weatherReport = (function (oldWeatherReport) {
	var input = document.getElementById('cityInput'),
			submit = document.getElementById('submitButton'),
			unitSelect = document.getElementById('unitSelect'),
			unitSelectValue = unitSelect.value,
			forecastSelect = document.getElementById('forecastSelect');

	oldWeatherReport.addEvents = function () {
		submit.addEventListener('click', function () {
			let city = input.value,
					unit = unitSelectValue;
			weatherReport.loadCurrentWeather(city, unit);
		});

		forecastSelect.addEventListener('change', function (changeEvent) {
			if (this.value === 'fiveDay') {
				weatherReport.loadFiveDayForecast(unitSelectValue);
			}
		});

	};
	
 return oldWeatherReport;
})(weatherReport || {});