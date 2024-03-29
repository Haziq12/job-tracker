import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import BarChartComponent from "./BarChartComponent"
import AreaChartComponent from "./AreaChart"
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
      {barChart ? <BarChartComponent data={data}/> : <AreaChartComponent data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer