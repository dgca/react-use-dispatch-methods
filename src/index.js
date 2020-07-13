import { useReducer, useMemo, useCallback } from "react";

export function useDispatchMethods(
  methods,
  initialState,
  init,
  dependencyArray = []
) {
  const reducer = useCallback((state, { type, payload }) => {
    return methods[type]({ state, payload });
  }, dependencyArray);

  const [state, dispatch] = useReducer(reducer, initialState, init);

  const builtDispatch = useMemo(
    () =>
      Object.keys(methods).reduce((acc, type) => {
        acc[type] = (payload) => {
          dispatch({
            type,
            payload,
          });
        };

        return acc;
      }, {}),
    dependencyArray
  );

  return [state, builtDispatch];
}
