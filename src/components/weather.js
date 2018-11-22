import React from "react";

class Weather extends React.Component {

  render() {

    return (

      <div className="weather-info">

      {
          this.props.location && this.props.mintemp && this.props.humidity && this.props.description && (
            <table width="100%">
             <tr>
                {
                  this.props.location && (
                    <td>
                      <p className="weather__value">{this.props.location}</p>
                    </td>
                  )
                }
                {
                  this.props.mintemp && (
                    <td>
                      <p className="weather__value">{this.props.mintemp}</p>
                    </td>
                  )
                }
                {
                  this.props.humidity && (
                    <td>
                      <p className="weather__value">{this.props.humidity}</p>
                    </td>
                  )
                }
                {
                  this.props.description && (
                    <td>
                      <p className="weather__value">{this.props.description}</p>
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