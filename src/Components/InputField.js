import React , {useState , useEffect} from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons'


export const InputField = ({cityFunc,error}) => {

    const [city, setcity] = useState('')
    const[erranimation , setanimation] = useState('')

    
    const date = new Date().toDateString()
    
    function change(e){
            setcity(e.target.value)
            
    } 

    function handleClick(e){
        e.preventDefault()
           cityFunc(city)
        setcity('') 


    }

   function handleClick2(){
        setcity('')
        setanimation('') 
   }

   useEffect(() => {
    if(error){
        console.log('error')
        setcity("INVALID INPUT DETECTED")
        setanimation('animate-bounce') 

   }
   }, [error])
   


 

    return (


    <>
        <form onSubmit={handleClick} className="flex flex-col flex-wrap  justify-center ">

            <div className='my-4 flex flex-row items-center justify-center space-x-3 focus:outline-none'>
                
                <input onClick={handleClick2} required value={city} onChange={change} className={`${erranimation} shadow-xl shadow-slate-700 w-2/3 p-3 rounded-xl sm:w-1/3 md:2/3`} type="text" placeholder='Search the city....'  />
               <button type='submit' className='trans ease-in hover:scale-75 '><UilSearchAlt className='text-white' size={40}/></button> 
               
            </div>

           

            
          
        </form>
    </>
  )
}
