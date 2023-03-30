import Log from "../../components/Log/Log";
import "./Home.scss"
import { useEffect, useState } from "react";
function Home() {

  const [logs, setLogs] = useState([]);
  const [createdBy, setCreatedBy] = useState("");
  const [date, setDate] = useState("");
  const [aircraftType, setAircraftType] = useState("");
  const [registration, setRegistration] = useState("");
  const [captain, setCaptain] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [picOrDual, setPicOrDual] = useState("");
  const [singleOrMulti, setSingleOrMulti] = useState("");
  const [dayOrNight, setDayOrNight] = useState("");
  const [originCountry, setOriginCountry] = useState("");

  const updateLog = (log) => {
    setLogs(log)
  }

  const updateCreatedBy = (createdBy) => {
    setCreatedBy(createdBy)
  }

  const updateDate = (date) => {
    setDate(date)
  }

  const updateAircraftType = (aircraftType) => {
    setAircraftType(aircraftType)
  }

  const updateRegistration = (registration) => {
    setRegistration(registration)
  }

  const updateCaptain = (captain) => {
    setCaptain(captain)
  }

  const updateDeparture = (departure) => {
    setDeparture(departure)
  }

  const updateDestination = (destination) => {
    setDestination(destination)
  }

  const updatePicOrDual = (picOrDual) => {
    setPicOrDual(picOrDual)
  }

  const updateSingleOrMulti = (singleOrMulti) => {
    setSingleOrMulti(singleOrMulti)
  }

  const updateDayOrNight = (dayOrNight) => {
    setDayOrNight(dayOrNight)
  }


  const getLogs = async () => {
    const url = "http://localhost:8080/logs";
    const res = await fetch(url);
    const data = await res.json();
    const logsListJSX = data.map((log) => ( 
      <Log key={log.id} id={log.id} createdBy={log.createdBy} date={log.date} aircraftType={log.aircraftType} registration={log.registration} captain={log.captain} departure={log.departure} destination={log.destination} picOrDual={log.picOrDual} singleOrMulti={log.singleOrMulti} dayOrNight={log.dayOrNight} handleDelete={handleDelete} handlePut={handlePut} updateLog={updateLog} updateCreatedBy={updateCreatedBy} updateDate={updateDate} updateAircraftType={updateAircraftType} updateRegistration={updateRegistration} updateCaptain={updateCaptain} updateDeparture={updateDeparture} updateDestination={updateDestination} updatePicAndDual={updatePicOrDual} updateSingleOrMulti={updateSingleOrMulti} updateDayOrNight={updateDayOrNight}/>
    ));
    setLogs(logsListJSX)
  };

  useEffect(() => {
    getLogs();
  }, []);

  const handlePost= (e) => {
    e.preventDefault();
    const log = { createdBy, date, aircraftType, registration, captain, departure, destination, picOrDual, singleOrMulti, dayOrNight, originCountry };
    console.log("from post");
    fetch('http://localhost:8080/log', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    }).then(() => {
      getLogs();
      console.log('new log added');
    })
  }

  const handlePut = (id) => {
    const log = { createdBy, date, aircraftType, registration, captain, departure, destination, picOrDual, singleOrMulti, dayOrNight, originCountry };
    console.log(log);
    
    fetch(`http://localhost:8080/log/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    }).then(() => {
      getLogs();
      console.log('log updated');
    })
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/log/${id}`, {
      method: 'DELETE'
    }).then(() => {
      getLogs();
      console.log('log deleted');
    })
  }

  return (
    <div className="main">
      <h1 className="main--heading">PILOTS LOGBOOK</h1>
      <form className="input-box" onSubmit={handlePost}><br/>
        Created by: 
        <input type="text" name="createdBy" value={createdBy} onChange={(e)=>{setCreatedBy(e.target.value)}} className="input-box__input"/><br/>
        Date: 
        <input type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} className="input-box__input"/><br/>
        Aircraft Type:
        <input type="text" name="aircraftType" value={aircraftType} onChange={(e)=>{setAircraftType(e.target.value)}} className="input-box__input"/><br/>
        Reg:
        <input type="text" name="registration" value={registration} onChange={(e)=>{setRegistration(e.target.value)}} className="input-box__input"/><br/>
        Captain:
        <input type="text" name="captain" value={captain} onChange={(e)=>{setCaptain(e.target.value)}} className="input-box__input"/><br/>
        Departure:
        <input type="text" name="departure" value={departure} onChange={(e)=>{setDeparture(e.target.value)}} className="input-box__input"/><br/>
        Destination:
        <input type="text" name="destination" value={destination} onChange={(e)=>{setDestination(e.target.value)}} className="input-box__input"/><br/>
        PIC or Dual:
        <select type="text" name="picOrDual" value={picOrDual} onChange={(e)=>{setPicOrDual(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="PIC">PIC</option> <option value="Dual">Dual</option></select><br/>
        Single or Multi:
        <select type="text" name="singleOrMulti" value={singleOrMulti} onChange={(e)=>{setSingleOrMulti(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="Single">Single</option> <option value="Muli">Multi</option></select><br/>
        Day or Night:
        <select type="text" name="dayOrNight" value={dayOrNight} onChange={(e)=>{setDayOrNight(e.target.value)}} className="input-box__input"> <option value="">--Select an option--</option> <option value="Day">Day</option> <option value="Night">Night</option></select><br/>
        Origin country:
        <input type="text" name="originCountry" value={originCountry} onChange={(e)=>{setOriginCountry(e.target.value)}} className="input-box__input"/><br/>
        <button className="input-box__button">ADD LOG</button>
      </form>

      <div className="log-table-heading">
        <h3 className="log-table-heading__item">Created By</h3>
        <h3 className="log-table-heading__item">Date</h3>
        <h3 className="log-table-heading__item">Aircraft Type</h3>
        <h3 className="log-table-heading__item">Registration</h3>
        <h3 className="log-table-heading__item">Captain</h3>
        <h3 className="log-table-heading__item">Departure</h3>
        <h3 className="log-table-heading__item">Destination</h3>
        <h3 className="log-table-heading__item">PIC or Dual</h3>
        <h3 className="log-table-heading__item">Single or Multi</h3>
        <h3 className="log-table-heading__item">Day or Night</h3>
      </div>
      <div className="logs">{logs}</div>
    </div>
  );
}

export default Home;