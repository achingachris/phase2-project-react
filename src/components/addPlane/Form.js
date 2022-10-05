import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Form = () => {
  // state hook to get form data
  const [spotterName, setSpotterName] = useState('')
  const [aircraft, setAircraft] = useState('')
  const [registration, setRegistration] = useState('')
  const [airline, setAirline] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [airport, setAirport] = useState('')
  const [destination, setDestination] = useState('')
  const [rate, setRate] = useState('')

  // handle input changes
  const handleSpotterNameChange = (e) => {
    setSpotterName(e.target.value)
  }
  const handleAircraftChange = (e) => {
    setAircraft(e.target.value)
  }
  const handleRegistrationChange = (e) => {
    setRegistration(e.target.value)
  }
  const handleAirlineChange = (e) => {
    setAirline(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleAirportChange = (e) => {
    setAirport(e.target.value)
  }
  const handleDestinationChange = (e) => {
    setDestination(e.target.value)
  }
  const handleRateChange = (e) => {
    setRate(e.target.value)
  }

    // const API_URL = 'http://localhost:5000/planes'
    const CYCLIC_URL = 'https://embarrassed-tan-starfish.cyclic.app/planes'

  //   handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const plane = {
      id: uuid(),
      spotter_name: spotterName,
      aircraft_type: aircraft,
      registration: registration,
      airline: airline,
      time_spotted: time,
      date_spotted: date,
      airport_spotted: airport,
      destination: destination,
      rate: rate,
    }
    console.log(plane)
    fetch(CYCLIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plane),
    }).then(() => {
      console.log('New plane added')
    })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        {/* enter spotter name */}
        <div className='mb-3'>
          <label htmlFor='spotterName' className='form-label'>
            Spotter Name
          </label>
          <input
            type='text'
            className='form-control'
            value={spotterName}
            onChange={handleSpotterNameChange}
          />
        </div>

        {/* enter aircraft type */}
        <div className='mb-3'>
          <label htmlFor='aircraft' className='form-label'>
            Aircraft Type
          </label>
          <input
            type='text'
            value={aircraft}
            onChange={handleAircraftChange}
            className='form-control'
          />
        </div>

        {/* enter aircraft registration */}
        <div className='mb-3'>
          <label htmlFor='registration' className='form-label'>
            Aircraft Registration
          </label>
          <input
            type='text'
            value={registration}
            onChange={handleRegistrationChange}
            className='form-control'
          />
        </div>

        {/* enter airline */}
        <div className='mb-3'>
          <label htmlFor='airline' className='form-label'>
            Airline
          </label>
          <input
            type='text'
            value={airline}
            onChange={handleAirlineChange}
            className='form-control'
            id='airline'
          />
        </div>

        {/* enter time spotted */}
        <div className='mb-3'>
          <label htmlFor='timeSpotted' className='form-label'>
            Time Spotted
          </label>
          <input
            type='time'
            value={time}
            onChange={handleTimeChange}
            className='form-control'
          />
        </div>

        {/* enter date spotted */}
        <div className='mb-3'>
          <label htmlFor='dateSpotted' className='form-label'>
            Date Spotted
          </label>
          <input
            type='date'
            value={date}
            onChange={handleDateChange}
            className='form-control'
          />
        </div>

        {/* enter airport spotted */}
        <div className='mb-3'>
          <label htmlFor='airportSpotted' className='form-label'>
            Airport Spotted
          </label>
          <input
            type='text'
            value={airport}
            onChange={handleAirportChange}
            className='form-control'
          />
        </div>

        {/* enter destination */}
        <div className='mb-3'>
          <label htmlFor='destination' className='form-label'>
            Plane Destination
          </label>
          <input
            type='text'
            value={destination}
            onChange={handleDestinationChange}
            className='form-control'
          />
        </div>

        {/* enter plane rating */}
        <div className='mb-3'>
          <label htmlFor='planeRating' className='form-label'>
            Plane Rating
          </label>
          <input
            type='number'
            min={0}
            className='form-control'
            value={rate}
            onChange={handleRateChange}
          />
        </div>

        {/* submit button */}
        <button type='submit' className='btn btn-outline-success'>
          Save
        </button>
      </form>
    </div>
  )
}

export default Form
