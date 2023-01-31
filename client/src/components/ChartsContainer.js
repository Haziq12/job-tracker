import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import AreaChart from "./AreaChart"
import BarChart from "./BarChart"
import { useState } from "react"

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications:data} = useAppContext()

  const toggleBarChart = () => {
    if(barChart === true) setBarChart(false)
    else setBarChart(true) 
  }
  return (
    <Wrapper>
      <button 
      className="btn"
      onClick={toggleBarChart}>
        Toggle Chart
      </button>
      {barChart ? <BarChart data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer