import React from "react";

const Topbuttons = ({cityFunc}) => {
  const cities = [
    { id: 1, title: "Mumbai" },
    { id: 2, title: "Delhi" },
    { id: 3, title: "Kolkata" },
    { id: 4, title: "Hyderabad" },
    {id:5,
        title:'Chennai'},

  ];
  function handleClick(e){
      cityFunc(e.target.value)
  }
  return (
    <> 
      <h1 className="text-white mt-4 text-center text-2xl font-thin  shadow-md shadow-slate-700 pb-3 ">TOP SEARCHES</h1>
      <div className="flex my-4  justify-around flex-wrap text-sm flex-row mx   text-white font-light sm:text-xl lg:text:2xl  ">
        {cities.map(city => ( 
            <button value={city.title}  onClick={handleClick}  className="hover:text-green-200 font-bold" key={city.id}>{city.title}</button>
        ))}
      </div>
    </>
  );
};

export default Topbuttons;
