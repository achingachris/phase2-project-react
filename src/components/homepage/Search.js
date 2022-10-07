const Search = ({ searchText, handleSearchTextChange }) => {
  return (
    <>
      <div className='container mb-4'>
        <form>
          <div className='mb-3'>
            <label htmlFor='search' className='form-label'>
              Search For Plane Name
            </label>
            <input
              type='text'
              className='form-control'
              value={searchText}
              onChange={handleSearchTextChange}
              name='search'
              placeholder='Search by Airline Name'
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Search
