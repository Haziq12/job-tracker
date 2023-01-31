import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import AreaChart from "./AreaChart"
import BarChart from "./BarChart"
import { useState } from "react"

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications:data} = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button 
      className="btn"
      type="button"
      onClick={() => setBarChart(!barChart)}>
        Toggle Chart
      </button>
      {barChart ? <BarChart data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer