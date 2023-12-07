import Navbar from './layout/navbar'
import Footer from './layout/footer'
import Main from './layout/main'
import { useRef } from 'react'

function App() {
  const formRef = useRef(null)

  const handleClick = () => {
    if (formRef.current) {
      const inputElement = formRef.current.querySelector('input[name="nombre"]')
      if (inputElement) {
        inputElement.focus()
      }
    }
  }

  return (
    <>
      <Navbar handleClick={handleClick} />
        <Main formRef={formRef} />
      <Footer />
    </>
  )
}

export default App