import React from 'react'
import { UilSunset , UilWind ,UilTear ,UilCloud, UilEye ,UilBrightness , UilArrowUp ,  UilArrowDown } from '@iconscout/react-unicons'
const Intro = ({sunrise , sunset ,maximum,minimum,humidity,cloud,visibility,windSpeed}) => {
  return (
    <>
        <div className='flex flex-col flex-wrap  items-center'>



        <div className='flex flex-row space-x-3 '>
                <UilBrightness className="text-white"/><span className="text-white text-sm">Sunrise - {sunrise} </span> 
                <p className="text-white text-sm"> | </p>
                <UilSunset className="text-white text-sm"/> <span className="text-white">Sunset - {sunset}</span>



            </div>

        <div className='flex flex-row space-x-3 mt-3'>
                <UilEye  className="text-white"/><span className="text-white text-sm">Visibillity - {visibility}km</span> 
                <p className="text-white text-sm"> | </p>
                <UilWind className="text-white"/> <span className="text-white text-sm">Wind-Speed - {windSpeed}km/hr</span>



            </div>




            <div className='flex flex-row space-x-3 mt-3'>
                <UilArrowUp  className="text-white"/><span className="text-white text-sm">Maximum - {maximum}°C</span> 
                <p className="text-white"> | </p>
                <UilArrowDown className="text-white"/> <span className="text-white text-sm">Minimum - {minimum}°C</span>



            </div>

            <div className='flex flex-row space-x-3 mt-3'>
                <UilTear  className="text-white"/><span className="text-white text-sm">Humidity - {humidity}%</span> 
                <p className="text-white"> | </p>
                <UilCloud className="text-white"/> <span className="text-white text-sm">Cloud - {cloud}%</span>



            </div>

           




         

        </div>
    </>
  )
}

export default Intro