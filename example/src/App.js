import React from 'react'
import { useDispatchMethods } from '@dgca/react-use-dispatch-methods'

const Example = () => {
  const [state, dispatch] = useDispatchMethods(
    {
      increment: ({ state }) => state + 1,
      decrement: ({ state }) => state - 1,
      setValue: ({ payload }) => payload
    },
    0
  )

  return (
    <div>
      <p>The count is {state}</p>
      <button onClick={dispatch.increment}>Increment</button>
      <button onClick={dispatch.decrement}>Decrement</button>
      <input
        type='number'
        value={state}
        onChange={e => {
          const num = parseInt(e.target.value, 10)
          dispatch.setValue(num)
        }}
      />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Example />
    </div>
  )
}
export default App
