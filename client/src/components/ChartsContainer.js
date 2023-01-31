import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import { useState } from "react"

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications:data} = useAppContext()
  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default ChartsContainer