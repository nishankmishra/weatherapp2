import React from "react";

const Weather = ({cityName,cityTemp,description,icon,date}) => {
  return (
    <>
      <div className="flex flex-col  items-center flex-wrap mt-3 justify-center">
     
        <p className="text-white text-3xl font-semibold sm:text-5xl mb-5">{cityName}</p>
        <p className="text-white text-3xl font-bold sm:text-5xl mb-3">{cityTemp}°C</p>
        <p className="text-white text-3xl font-bold sm:text-3xl capitalize">{description}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
       
       
     
       
        
      </div>
      
                
            
    </>
  );
};

export default Weather;
