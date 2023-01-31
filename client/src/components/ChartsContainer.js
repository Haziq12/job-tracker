import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import BarChartComponent from "./BarChartComponent"
import AreaChart from "./AreaChart"
import { useState } from "react"

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications:data} = useAppContext()

  return (
    <Wrapper>
      <BarChartComponent />
      <h4>Monthly Applications</h4>
      <button 
      className="btn"
      type="button"
      onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer