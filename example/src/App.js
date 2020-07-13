import React from 'react'
import { useMyHook } from '@dgca/react-use-dispatch-methods'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App