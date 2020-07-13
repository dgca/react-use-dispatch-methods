# @dgca/react-use-dispatch-methods

> Abstraction over useReducer to make writing reducer functions easier, cleaner, and more grokkable.

[![NPM](https://img.shields.io/npm/v/@dgca/react-use-dispatch-methods.svg)](https://www.npmjs.com/package/@dgca/react-use-dispatch-methods) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @dgca/react-use-dispatch-methods
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@dgca/react-use-dispatch-methods'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [dgca](https://github.com/dgca)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
