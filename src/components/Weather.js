import React,{useState} from 'react';
import'./weather.css'
import DisplayWeather from './DisplayWeather';

function Weather() {
    const APIKEY = "af5a0be17f617f48b8af345b035433f6";

    const [form, setForm] = useState({
        city:"",
        country:""
    });
    const [weather,setWeather] = useState([]);

    async function weatherData(e){
        e.preventDefault();
        if(form.city === ""){
            alert ("Add values");
        }else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            .then(res => res.json())
            .then((data)=>(data));
            console.log(data);
            setWeather({
                data: data
            });
        }
    }

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if(name ==="city"){
            setForm({ ...form, city: value})
        }
        if(name ==="country"){
            setForm({ ...form, country: value})
        }
    }

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br></br>
            <form>
                <input type="text" name="city" placeholder="city" onChange={(e)=>handleChange(e)}></input>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="text" name="country" placeholder="country" onChange={(e)=>handleChange(e)}></input>
                <button className="getweather" onClick ={(e)=>weatherData(e)}>Submit</button>
            </form>
            {
                weather.data !== undefined ? 
                <div> <DisplayWeather data = {weather.data}/></div> : null
            }
        </div>
    )
}

export default Weather
