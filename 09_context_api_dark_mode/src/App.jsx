
import './App.css'
import { Card,ThemeBtn } from './components'
import { ThemeProvider } from './context/theme'
function App() {

  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn></ThemeBtn>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card></Card>
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
