import Landing from "./pages/Landing";
import styled from 'styled-components'

const Button = styled.button`
background: black;
color: white;
font-size: 1rem;
`

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <h1>Job Tracker</h1>
      <Landing />
    </div>
  )
}

export default App;
