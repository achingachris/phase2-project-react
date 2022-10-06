import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import AddPlane from './pages/AddPlane'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddPlane />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  )
}

export default App
