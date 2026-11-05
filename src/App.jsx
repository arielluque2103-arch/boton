import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>WACHIN</button>
      <p>Usted ha tocado el botón {count} {count === 1 ? 'vez' : 'veces'}</p>
    </>
  )
}

export default App