import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from "../../components"

const Stats = () => {
  const {showStats, isLoading, monthlyApplications} = useAppContext()

  useEffect(() => {
    showStats()
  }, [])
  
  return (
    <h1>Stats Page</h1>
  )
}

export default <Stats></Stats> 