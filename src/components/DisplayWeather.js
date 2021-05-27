import React from 'react'
import './displayweather.css';

function DisplayWeather(props) {

    const {data} = props;
    const iconurl = " http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png"

    return (
        <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                    {data.name} , {data.sys.country}  weather
                </span>
                <span className="cardsubtitle">
                    As of {new Date().toLocaleDateString()}
                </span>
                <h1>{Math.floor(data.main.temp - 273.15)}<sup>o</sup></h1>
                <span className="weather-main">
                    {data.weather[0].main}
                </span>
                <img src = {iconurl} className="weather-icon" alt =""></img>
                <span className="weather-description">{data.weather[0].description}</span>
            </div>
            <div className="weatherdetails">
                <div className="section1">
                    <table>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                {Math.floor(data.main.temp_max - 273.15)} / {" "}
                                {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <span>{data.main.humidity} %</span>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Pressure</h4>
                            </td>
                            <td>
                                <span>{data.main.pressure}hPa</span>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibility</h4>
                            </td>
                            <td>
                                <span>{data.visibility / 1000} km</span>
                           </td>
                        </tr>
                    </table>
                </div>
                <div className="section2">
                    <table>
                        <tr>
                            <td>
                                <h4>Wind</h4>
                            </td>
                            <td>
                                <span>{Math.floor((data.wind.speed * 18) / 15)} km/hr</span>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Wind Direction</h4>
                            </td>
                            <td>
                                <span>{data.wind.deg} <sup>o</sup> deg</span>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunrise</h4>
                            </td>
                            <td>
                                <span>{new Date(data.sys.sunrise * 1000).toLocaleDateString()}</span>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunset</h4>
                            </td>
                            <td>
                            <span>{new Date(data.sys.sunset * 1000).toLocaleDateString()}</span>
                           </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather
