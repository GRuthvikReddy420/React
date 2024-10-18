import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <h1>StudentDATA</h1>
	<input type="text" placeholder="enter name"/><br></br>
    <input type="email" placeholder="email address"/><br></br>
    <input type="adress" placeholder="adress"/><br></br>
    <input type="submit" value="submit"/><br></br>
     </div>
    </>
  )
}

export default App
