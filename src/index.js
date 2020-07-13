import { useReducer } from 'react'

export function useDispatchMethods(methods, initialState, init) {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      return methods[type]({ state, payload });
    },
    initialState,
    init
  );

  const builtDispatch = Object.keys(methods).reduce((acc, type) => {
    acc[type] = payload =>
      dispatch({
        type,
        payload
      });
    return acc;
  }, {});

  return [state, builtDispatch];
}
