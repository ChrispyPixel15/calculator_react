import { useState } from 'react'
import '@vitejs/plugin-react/preamble'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ThemeProvider from './contexts/ThemeContext.jsx'
import Calculator from './pages/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  )
}

export default App
