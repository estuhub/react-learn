// import react
import React, { useState } from 'react'

// create function
function App () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick={() => setCount( count + 1 )}>Click me</button>
    </div>
  )
}

// export react
export default App;
