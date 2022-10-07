import Header from '../components/Header'
import Meta from '../components/Meta'
import Planes from '../components/homepage/Planes'
import Search from '../components/homepage/Search'

const Home = () => {
  // page content
  const pageTitle = 'Plane Spotter'
  const pageDescription = 'One Stop for all your plane spotting Geeky needs'

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <Search />
      <Planes />
    </div>
  )
}

export default Home
