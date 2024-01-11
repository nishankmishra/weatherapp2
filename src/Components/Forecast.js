
import React,{useState,useEffect} from "react";
import axios from "axios";
import Loading from "./Loading";
const Forecast = ({lat,lon}) => {
  const [data, setdata] = useState(false)

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2203e8d6434a0cee809e7ad8f8e69490`;
    axios
      .get(url)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  
  
  }, [])
  




  return (
   
    <>
    {data? 
      <div className="flex flex-col flex-wrap  items-center">
        <p className="text-white md:text-4xl sm:my-10 my-4 text-2xl font-semibold uppercase">Upcoming Forecast</p>
        <div className="grid sm:grid-cols-5 md:grid-cols-10 grid-cols-4 grid-flow-cols ">
      {data.list.map(item => (
        <div key={item.dt} className=" flex mb-6  flex-col border-gray-400 border shadow-lg shadow-slate-600   text-white text-xs items-center">
        <p className="my-2">{item.dt_txt.split(' ')[0]}</p>
        <p>{item.dt_txt.split(' ')[1]}</p>

            <img className="w-20"
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
             <p className="mb-2">{item.weather[0].description}</p>
            <p className="mb-2">{Math.floor(item.main.temp/10)}°C</p>
            <hr />
            </div>
      ))}

        </div>

      
      </div>:(<Loading/>)}
    </>
  );
};

export default Forecast;
