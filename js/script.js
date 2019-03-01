$(document).ready(function(){
    $(".weatherForecastForm").on('submit', function(event) {
        event.preventDefault();
        
        if($('.city').val() != '') {
            $('.loaderDiv').removeClass('hide');
            $.ajax({
                type: "get",
                url: 'https://api.openweathermap.org/data/2.5/forecast',
                data: {
                    'q': $('.city').val(),
                    'cnt' : 5,
                    'appid' : "96a5ddcbbb1705a49672d1bca7a425c5",
                    'mode' : 'json',
                    'units' : 'metric'
                },
                success: function (data) {
                    $('.loaderDiv').addClass('hide');
                    $('.error').addClass('hide').find('.weather__error').text('');
                    var weather_list = data.list;
                    var trHTML;
                    var city = data.city.name;
                    $.each(weather_list, function (i, item) {
                        trHTML += '<tr><td><p className="weather__value">'+ city +'</p></td><td><p className="weather__value">'+ item.main.temp_min +'</p></td><td><p className="weather__value">'+ item.main.humidity +'</p></td><td><img id="wicon"  src="http://openweathermap.org/img/w/'+ item.weather[0].icon + '.png"<p className="weather__value">' + item.weather[0].description +'</p></td></tr>';
                    });
                    $('.weatherDeatilsRow').append(trHTML);
                    
                    $('.weatherDeatilsWrapper').removeClass('hide');
                }
            });
        }
        else {
            $('.error').removeClass('hide').find('.weather__error').text('Please enter valid Input');
        }
    });

})
