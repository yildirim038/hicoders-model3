import React,{ useState,useEffect} from 'react'

const Weather =()=>{
    const [city, setCity] = useState("Zürich");
    const key = "41968320add7468c8f60d32881b31c28"
    const API_URL= `https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}&include=minutely`;
    const [recipe,setRecipe] = useState({});
  
    useEffect(()=>{
      loadData();
    })
    
    const loadData = async () => {
      const response = await fetch(API_URL);
      const weatherData = await response.json();
      setRecipe (weatherData.data[0]);
      console.log(weatherData.data[0]);
    }
  
    return (
     <div className="App">
          <div className="weather-box">
            <input className="temp" type="text" placeholder="sehir gir" value={city} onChange={(e) => setCity(e.target.value)}/>
            <div className="temp">Sicaklik: {recipe.app_temp}°C</div>
            <div className="weather">Ulke Kodu:{recipe.country_code}</div>
          </div>
      </div>
    )
}
export default Weather;