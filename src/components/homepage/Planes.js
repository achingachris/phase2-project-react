import { useEffect, useState } from 'react'
import PlaneCard from './PlaneCard'

const Planes = () => {
  // const API_URL = 'http://localhost:5000/planes'
  const CYCLIC_URL = 'https://embarrassed-tan-starfish.cyclic.app/planes'

  const [planes, setPlanes] = useState([])

  useEffect(() => {
    fetch(CYCLIC_URL)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then((data) => {
        setPlanes(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='container mt-5 mb-3'>
      <div className='row'>
        {planes.map((plane) => (
          <PlaneCard
            key={plane.id}
            plane={plane}
            spotterName={plane.spotter_name}
            dateSpotted={plane.date_spotted}
            registration={plane.registration}
            airline={plane.airline}
            airport={plane.airport}
            destination={plane.destination}
            rate={plane.rate}
          />
        ))}
      </div>
    </div>
  )
}

export default Planes
