# @dgca/react-use-dispatch-methods

[![NPM](https://img.shields.io/npm/v/@dgca/react-use-dispatch-methods.svg)](https://www.npmjs.com/package/@dgca/react-use-dispatch-methods) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

`useDispatchMethods` is a wrapper over `useReducer` to make writing reducer functions easier, cleaner, and more grokkable.

Instead of dispatching actions, and handling them in a handrolled reducer funciton, you pass `useDispatchMethods` an object of methods that take the current state and a payload, and return the new state, and it returns an object of methods that, when called, dispatch actions that do the things you just defined!

## Install

```bash
npm install --save @dgca/react-use-dispatch-methods
```

## Usage

`useDispatchMethods(methods, initialState, init)` takes three arguments:

* `methods` - An object of pure functions. Each function's name will be the name you use to update the state later on. Each function will receive an object of `{state, payload}` as its argument, where `state` is the current state, and `payload` is the payload that was passed to the state (if an argument was passed).
* `initialState` - The initial value of our state. See React's [docs](https://reactjs.org/docs/hooks-reference.html#specifying-the-initial-state) on specifying the initial state.
* `init` - See React's [docs](https://reactjs.org/docs/hooks-reference.html#lazy-initialization) on lazy initialization.

`useDispatchMethods` returns an array of `[state, dispatch]` where `state` is the current state, and `dispatch` is an object of methods to use to update the state.

## Example

In the example below, the `increment` and `decrement` functions show how to use the `state` destructured argument, and `setValue` shows how to use the `payload` argument.

```jsx
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
```

## License

MIT © [dgca](https://github.com/dgca)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
