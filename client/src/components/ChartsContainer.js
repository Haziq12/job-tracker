import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import AreaChart from "./AreaChart"
import BarChartContainer from "./BarChart"
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
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartContainer data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer