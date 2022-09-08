
import { useState } from "react";
import "./Log.scss"
const Log = ({id, createdBy, date, aircraftType, registration, captain, departure, destination, picOrDual, singleOrMulti, dayOrNight, handleDelete, setCreatedBy, setDate, setAircraftType, setRegistration, setCaptain, setDeparture, setDestination, setPicOrDual, setSingleOrMulti, setDayOrNight, handlePut }) => {

  const [editState, setEditState] = useState(true);
    const handleClickDelete = (event) => {
        event.preventDefault()
        handleDelete(id);
      }
    
    const handleClickEdit = (event) => {
      event.preventDefault()
      setEditState(false);
    }

    const handleClickUpdate = (event) => {
      event.preventDefault()
      handlePut(id);
      setEditState(true);
    }
    
    return (
      editState?
      <div className="log">
        <h3 className="log__item">{createdBy}</h3>
        <h3 className="log__item">{date}</h3>
        <h3 className="log__item">{aircraftType}</h3>
        <h3 className="log__item">{registration}</h3>
        <h3 className="log__item">{captain}</h3>
        <h3 className="log__item">{departure}</h3>
        <h3 className="log__item">{destination}</h3>
        <h3 className="log__item">{picOrDual}</h3>
        <h3 className="log__item">{singleOrMulti}</h3>
        <h3 className="log__item">{dayOrNight}</h3>
        <button className="log__button" onClick={handleClickEdit}>Edit</button>
        <button className="log__button" onClick={handleClickDelete}>Delete</button>
      </div>
      :
      <div className="log">
      <form onSubmit={handleClickUpdate}>
        <input type="text" name="createdBy" value={createdBy} onChange={(e)=>{setCreatedBy(e.target.value)}} className="input-box__input"/>
        <input type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} className="input-box__input"/>
        <input type="text" name="aircraftType" value={aircraftType} onChange={(e)=>{setAircraftType(e.target.value)}} className="input-box__input"/>
        <input type="text" name="registration" value={registration} onChange={(e)=>{setRegistration(e.target.value)}} className="input-box__input"/>
        <input type="text" name="captain" value={captain} onChange={(e)=>{setCaptain(e.target.value)}} className="input-box__input"/>
        <input type="text" name="departure" value={departure} onChange={(e)=>{setDeparture(e.target.value)}} className="input-box__input"/>
        <input type="text" name="destination" value={destination} onChange={(e)=>{setDestination(e.target.value)}} className="input-box__input"/>
        <select type="text" name="picOrDual" value={picOrDual} onChange={(e)=>{setPicOrDual(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="PIC">PIC</option> <option value="Dual">Dual</option></select>
        <select type="text" name="singleOrMulti" value={singleOrMulti} onChange={(e)=>{setSingleOrMulti(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="Single">Single</option> <option value="Muli">Multi</option></select>
        <select type="text" name="dayOrNight" value={dayOrNight} onChange={(e)=>{setDayOrNight(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="Day">Day</option> <option value="Night">Night</option></select>
        
        <button type="submit" className="log__button">Update</button>
      </form>
        <button className="log__button" onClick={handleClickDelete}>Delete</button>
      </div>
    );
  };
  
  export default Log;