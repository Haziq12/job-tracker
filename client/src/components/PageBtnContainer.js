import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from "../assets/wrappers/PageBtnContainer"
import { useAppContext } from "../context/appContext"

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext()

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
      </button>
      <div className="btn-container">Buttons</div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer