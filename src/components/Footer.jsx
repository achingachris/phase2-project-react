const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='head-font text-center text-capitalize'>
        Plane Spotter &copy; {year}
      </footer>
    </>
  )
}

export default Footer
