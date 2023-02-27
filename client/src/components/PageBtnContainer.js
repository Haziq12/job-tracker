import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from "../assets/wrappers/PageBtnContainer"
import { useAppContext } from "../context/appContext"

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext()

  const pages = Array.from({length:numOfPages}, (_, index) => {
    return index + 1 
  })
  console.log(pages)

  const nextPage = () => {
    console.log('next page')
  }

  const prevPage = () => {
    console.log('prev page')
  }

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return <button type='button' className={pageNumber === page ? 'pageBtn active' : 'pageBtn'} 
          key={pageNumber}
          onClick={() => console.log('click')}
          >
            {pageNumber}
          </button>
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        Next 
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer