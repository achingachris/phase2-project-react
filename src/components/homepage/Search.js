const Search = ({search, onSearchChange}) => {
  return (
    <>
      <div className='container'>
        <div className='row height d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <div className='form'>
              <input
                type='text'
                className='form-control form-input'
                placeholder='Search for planes spotted'
                onChange={onSearchChange}
                value={search}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
