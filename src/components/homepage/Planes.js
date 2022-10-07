import { useEffect, useState } from 'react'
import PlaneCard from './PlaneCard'
import Search from './Search'

const Planes = () => {
  const [planes, setPlanes] = useState([])
  const [search, setSearch] = useState('')

  const CYCLIC_URL = 'https://embarrassed-tan-starfish.cyclic.app/planes'

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

  const handleSearchText = (e) => {
    setSearch(e.target.value)
    console.log('value is:', e.target.value)
  }

  // display search results
  const filteredPlanes = planes.filter((plane) => {
    return plane.airline.toLowerCase().includes(search.toLowerCase())
  })

  console.log(filteredPlanes)

  return (
    <div className='container mt-5 mb-3'>
      <Search search={search} handleSearchTextChange={handleSearchText} />
      <div className='row'>
        {filteredPlanes.map((plane) => (
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
            likes={plane.likes}
          />
        ))}
      </div>
    </div>
  )
}

export default Planes
