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

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
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
          />
          <FormRowSelect
            labelText='Status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['All', ...statusOptions]}
          />
          <FormRowSelect
            labelText='Job Type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['All', ...jobTypeOptions]}
          />
          <FormRowSelect
            labelText='Sort'
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}>
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
