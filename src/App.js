import React from 'react'
import People from '~src/pages/people.tsx'

function App () {
  return (
    <div className="App">
      <People name="hagan" age={22} />
      <style jsx>{`
        .App {
          color: red;
        }
      `}</style>
    </div>
  )
}

export default App
