$(function(){
		var url = 'https://restcountries.eu/rest/v1/name/';
		var countriesList = $('#countries');
		$('#search').click(searchCountries);

		function searchCountries() {
  				var countryName = $('#country-name').val();
  			if(!countryName.length) countryName = 'Poland';
  			$.ajax({
  				url: url + countryName,
  				method: 'GET',
  				success: showCountriesList
  			});
		}	
		function showCountriesList(resp) {
  				countriesList.empty();
  				resp.forEach(function(item){
   					var Country1 = $('<div>', {"class": "Country1"});
					Country1.appendTo(countriesList);
   					$('<h1>').text(item.name).appendTo(Country1);   	
 					$('<div>').appendTo(Country1);
 					var Country = $('<div>');
   					Country.appendTo(Country1);
   					$('<p>').text('Capital:').appendTo(Country);
   					$('<p>').text(item.capital).appendTo(Country);
   					$('<p>').text('Timezone:').appendTo(Country);
   					$('<p>').text(item.timezones).appendTo(Country);
   					$('<p>').text('Currency:').appendTo(Country);
   					$('<p>').text(item.currencies).appendTo(Country);
   					$('<p>').text('Language:').appendTo(Country);
   					$('<p>').text(item.languages).appendTo(Country);
				
		
		});
  		}	
});