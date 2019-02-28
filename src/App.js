import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";

const Api_Key = "96a5ddcbbb1705a49672d1bca7a425c5";

class App extends React.Component {

  state = {
    city: undefined,
    country: undefined,
    error: undefined,
    weathers: []
  };

  //getWeather is a method we'll use to make the api call
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=${Api_Key}&cnt=5&mode=json&q=${city},${country}&units=metric`
    );
    const response = await api_call.json();
    if (city && country) {
      if (response.cod && (response.cod == "400" || response.cod == "404" || response.cod == "401")) {
        this.setState({
          error: response.message
        });
      } else {
        this.setState({
          weathers: response.list,
          location: response.city.name
        });
      }
    } else {
      this.setState({
        error: "Please input search values..."
      });
    }
  }
  render() {

    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-lg-4 col-md-4 title-container">
                <Titles />
                </div>
                <div className="col-xs-12 col-lg-8 col-md-8 form-container">
                <Form loadWeather={this.getWeather} />
					        <div>
                    {
                      this.state.weathers && this.state.weathers.length>0  && (

                        <table width="100%">
                          <tbody>
                            <tr>
                              <th>Location</th>
                              <th>Min Temprature</th>
                              <th>Humidity </th>
                              <th>Description</th>
                            </tr>
                          </tbody>
                        </table>
                      )
                    }
                    
                    {

                      this.state.weathers &&                       
                      
                      this.state.weathers.map((weather, index) => (
                        
                        <Weather 
                          key={index}
                          location={this.state.location} 
                          mintemp={weather.main.temp_min}
                          humidity={weather.main.humidity}
                          description={weather.weather[0].description}
                          icon={"http://openweathermap.org/img/w/"+ weather.weather[0].icon + ".png"}
                        />
                       )  
                      )
                    }
                    {
                      this.state.error && (
                        <Weather 
                          error={this.state.error}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
