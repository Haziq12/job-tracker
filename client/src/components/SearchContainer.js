import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters
  } = useAppContext()

  const handleSearch = (e) => {
    console.log(e.target.name)
  }

  return (
    <Wrapper>
      <form className='form'>
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow 
            type='text' 
            name='search'
            value={search}
            handleChange={handleSearch}
            ></FormRow>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
