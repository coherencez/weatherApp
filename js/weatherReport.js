var weatherReport = (function (oldWeatherReport) {
	var currentWeather = [],
			fiveDayForecast = [],
			cityName = null,
			cityId = null;

	oldWeatherReport.loadCurrentWeather = function (city, unit) {
		var apiKey = '1fdcac0360418bc0383eba1ca377c9b1';
		var cityZip = city;
		var unitOfMeasure = unit;
	  var weather = new XMLHttpRequest();
			
				weather.addEventListener('load', function (event) {
					currentWeather = JSON.parse(this.responseText);
					cityName = currentWeather.name;
					cityId = currentWeather.id;
					parseCurrentWeather(currentWeather);
				});
				
				weather.open('GET', `http://api.openweathermap.org/data/2.5/weather?zip=${cityZip},us&units=${unitOfMeasure}&APPID=${apiKey}`);
				weather.send();
	};

	oldWeatherReport.loadFiveDayForecast = function (unit) {
		var apiKey = '1fdcac0360418bc0383eba1ca377c9b1';
		var city = weatherReport.getCityInfo().id;
		var unitOfMeasure = unit;
	  var fiveDay = new XMLHttpRequest();
			
				fiveDay.addEventListener('load', function (event) {
					fiveDayForecast = JSON.parse(this.responseText);
					parseFiveDayForecast(fiveDayForecast);
				});
				
				fiveDay.open('GET', `http://api.openweathermap.org/data/2.5/forecast?id=${city}&units=${unitOfMeasure}&APPID=${apiKey}`);
				fiveDay.send();
	};

	oldWeatherReport.getWeather = function () {
		return currentWeather;
	};

	oldWeatherReport.getForecast = function () {
		return fiveDayForecast;
	};

	oldWeatherReport.getCityInfo = function () {
		return {
						name: cityName,
						id:  cityId
					 };
	};
 return oldWeatherReport;
})(weatherReport || {});
	


