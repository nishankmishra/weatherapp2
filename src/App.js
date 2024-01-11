import { useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import { InputField } from "./Components/InputField";
import Intro from "./Components/Intro";
import Topbuttons from "./Components/Topbuttons";
import Weather from "./Components/Weather";
import axios from "axios";
import Loading from "./Components/Loading";


export default function App() {
  const [city, setcity] = useState("khurja");
  const [upcoming, setupcoming] = useState([]);
  const [data, setdata] = useState(false);
  const [bg, setbg] = useState("");
  const [err , seterr] = useState(false)


  useEffect(() => {
    var url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2203e8d6434a0cee809e7ad8f8e69490`;
    axios
      .get(url)
      .then((res) => {
        setdata(res.data);
        seterr(false)
        setBg(res.data.weather[0].id);
       
      })
      .catch((err) => {seterr(true);console.log(err) });
  }, [city]);

  function cityChange(getcity) {
    setcity(getcity);
  }
  function setBg(id) {
   
    if (id >= 200 && id < 300) {
      setbg(`bg-[url('./images/ThunderStorm.jpg')]`);
      ;
    } else if (id >= 300 && id < 400) {
      setbg(`bg-[url('./images/Drizzle.jpg')]`);

     
    } else if (id >= 500 && id < 600) {
      setbg(`bg-[url('./images/Drizzle.jpg')]`);
      
    } else if (id >= 600 && id < 700) {
      setbg(`bg-[url('./images/Snow.jpg')]`);
      
    } else if (id >= 700 && id < 800) {
      setbg(`bg-[url('./images/haze.jpg')]`);
      
    } else if (id >= 801 && id < 900) {
      setbg(`bg-[url('./images/Clouds.jpg')]`);
      
    } else {
      setbg(`bg-[url('./images/cleat.jpg')]`);
      
    }
  }

  return (
    <>
      {data ? (
        <div
          className={`pb-8   h-full flex flex-col bg-cover  shadow-md shadow-gray-600 ${bg}`}
        >
        
          <Topbuttons cityFunc={cityChange} />
          <InputField cityFunc={cityChange} error={err} />
          <Weather
            cityName={`${data.name} ${data.sys.country}`}
            cityTemp={Math.floor(data.main.temp / 10)}
            description={data.weather[0].description}
            icon={data.weather[0].icon}
          />
          <Intro
            sunrise={new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            sunset={new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            maximum={Math.floor(data.main.temp_max / 10)}
            minimum={Math.floor(data.main.temp_min / 10)}
            humidity={data.main.humidity}
            cloud={data.clouds.all}
            visibility={Math.floor(data.visibility / 1000)}
            windSpeed={data.wind.speed}
          />

          <Forecast  lat = {data.coord.lat} lon={data.coord.lon} />
          
        </div>
      ) : (
        <Loading/>
      )}
    </>
  );
}
