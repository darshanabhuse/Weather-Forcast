import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
				
				
				
				
				{
					this.props.country && this.props.city && this.props.temperature && this.props.humidity && this.props.description && (
						<table width="100%">
						<tr>
						
							<th  className="weather__key"> Location </th>
							<th  className="weather__key"> Temperature </th>
							<th  className="weather__key"> Humidity </th>
							<th  className="weather__key"> Conditions </th>
						</tr>
						
					
					<tr>
					{
						this.props.country && this.props.city && (
						  
							<td>
							  <p className="weather__value">
							  {this.props.city}, {this.props.country}
							  </p>
							</td>
						)
					}
					{
						this.props.temperature && 
						
						(
							<td><p className="weather__value">{this.props.temperature}</p>
							</td>
						)
					}

					{
						this.props.humidity && (
						<td><p className="weather__value"> {this.props.humidity}</p>
							</td>
							
						
						)
					}

					{
						this.props.description && (
							<td><p className="weather__value">   {this.props.description} </p>
							</td>
							
						) 
					}
					</tr>
					</table>
					)
				}
					
					{
						this.props.error && <p className="weather__error">{this.props.error}</p>
					}															
				
            </div>
        )
    }
}

export default Weather;