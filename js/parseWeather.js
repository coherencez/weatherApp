function parseCurrentWeather (currentWeather) {
			currentWeather = weatherReport.getWeather();
	var outputContainer = document.getElementById('output'),
			cityName = currentWeather.name,
			cityString = '',
			weatherString = '';
			cityString += `<div class="row">
											<div class="col-sm-6 col-sm-offset-3 weatherCity">
												<h1 id="city">${cityName}</h1>
											</div>
										</div>`;
			outputContainer.innerHTML = cityString;

		let forecast = currentWeather,
		    newDate = new Date(forecast.dt * 1000),
		    temp = Math.floor(forecast.main.temp),
        weather = forecast.weather[0].description,
		    humidity = forecast.main.humidity,
		    windSpeed = Math.floor(forecast.wind.speed);
				day = newDate.getDay();

				if (day === 0) {
					day = 'Monday';
				} else if (day === 1) {
					day = 'Tuesday';
				} else if (day === 2) {
					day = 'Wednesday';
				} else if (day === 3) {
					day = 'Thursday';
				} else if (day === 4) {
					day = 'Friday';
				} else if (day === 5) {
					day = 'Saturday';
				} else if (day === 6) {
					day = 'Sunday';
				}

			
				weatherString += `<div class="row">
														<div class="col-sm-4 col-sm-offset-4 currentWeatherCard">
															<header>
																<h4 id="weatherDay">${day}</h4>
															</header>
															<section id="weatherinfo">
																<p>${weather}</p>
																<h5>${temp}&deg;</h5>
																<p>${humidity}% Humidity</p>
																<p>Wind speed: ${windSpeed} knots</p>
															</section>
													  </div>
												  </div>`;
			
	outputContainer.innerHTML += weatherString;	
}


function parseFiveDayForecast (forecastWeather) {
			forecastWeather = weatherReport.getForecast();
	var outputContainer = document.getElementById('output'),
			cityName = forecastWeather.city.name,
			cityString = '',
			weatherString = '';
			cityString += `<div class="row">
											<div class="col-sm-6 col-sm-offset-3 weatherCity">
												<h1 id="city">${cityName}</h1>
											</div>
										</div>`;
			outputContainer.innerHTML = cityString;

	for (var i = 0; i < forecastWeather.list.length; i++) {
		let forecast = forecastWeather.list[i],
		    newDate = new Date(forecast.dt * 1000),
		    temp = Math.round(forecast.main.temp),
        weather = forecast.weather[0].description,
		    humidity = forecast.main.humidity,
		    windSpeed = forecast.wind.speed;
				day = newDate.getDay();

				if (day === 0) {
					day = 'Monday';
				} else if (day === 1) {
					day = 'Tuesday';
				} else if (day === 2) {
					day = 'Wednesday';
				} else if (day === 3) {
					day = 'Thursday';
				} else if (day === 4) {
					day = 'Friday';
				} else if (day === 5) {
					day = 'Saturday';
				} else if (day === 6) {
					day = 'Sunday';
				}

			
				if (i % 8 === 0) {
				weatherString += `<div class="col-sm-2 weatherCard">
															<header>
																<h5 id="weatherDay">${day}</h5>
															</header>
															<section id="weatherinfo">
																<h5>${temp}&deg;</h5>
																<p>${weather}</p>
																<p>${humidity}% Humidity</p>
																<p>Wind speed: ${windSpeed}</p>
															</section>
													</div>`;
				}									
			
	}
	outputContainer.innerHTML += weatherString;	
}

weatherReport.addEvents();
