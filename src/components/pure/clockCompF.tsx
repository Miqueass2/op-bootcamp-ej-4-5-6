import React, {useState,useEffect} from 'react'
import { Person } from '../../models/persona.class'
import '../../styles/clock.scss'
export default function ClockCompF(props: any) {
   const randomData = new Person(new Date, "Miqueas", "Lazarte", 22)
   const [stateData, setNewData] = useState(randomData)

   const initialDate:any= false
    const [dataState, setDataState] = useState(initialDate)

    function newStatus() {
      setDataState((prevState:any)=> !prevState)
   }
   function tick() {
      setNewData((prevStateData: any) => {
         const toSetAge: number = prevStateData.age++
         return new Person(new Date, "Miqueas", "Lazarte", toSetAge);
      });
   }

   const objData = {
      name: "Moic",
      online:"Esta online"
   }

   useEffect(() => {
      setInterval(() => tick(), 1000);
   },[])
   return (
      <div>
         <h2 className="horaStyle">Hora actual: {stateData.date.toLocaleTimeString()} </h2>
         <h3 className='namesStyle'>Nombre y Apellido: {stateData.firstName} {stateData.lastName} </h3>
         <h2 className='ageStyle'>Edad: {stateData.age} </h2>
         <div>
            <button onClick={newStatus}> {dataState ? 'Esta on' : 'Esta off'} </button>
            {dataState ? 
            <div>
         <h2>{objData.name} </h2>
         <h2>{objData.online} </h2>
            </div>
             : ''}
      </div>
      </div>
   );
}



