// Misc methods

export const typeCreator = (str) => ({
  request: `${str}/request`,
  success: `${str}/success`,
  failure: `${str}/failure`,
});

// Taken from redux real-world example
// https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/real-world
export const paginate = ({ types, mapActionToKey }) => {
  if (!typeof types === 'object' || Object.keys(types).length !== 3) {
    throw new Error('Expected types to be an object with three elements.');
  }
  if (!Object.keys(types).every(t => typeof t === 'string')) {
    //eslint-disable-next-line
    console.log('Object keys', Object.keys(types));
    throw new Error('Expected types to be strings.');
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  const initialState = {
    loading: false,
    nextPageUrl: null,
    pagesCount: 0,
    ids: [],
  };

  const updatePagination = (state = initialState, action) => {
    switch (action.type) {
      case types.request:
        return {
          ...state,
          loading: true,
        };
      case types.success:
        // eslint-disable-next-line
        console.log('Action', action.response);
        const ids = action.response.results.map(({ name }) => name);
        return {
          ...state,
          loading: false,
          ids,
          nextPageUrl: action.response.next,
          pagesCount: state.pagesCount + 1,
        };
      case types.failure:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  }


  return (state = { }, action) => {
    //eslint-disable-next-line
    // console.log('Got action', action, action.type, 'types', types, action.type === types.request);
    switch (action.type) {
      case types.request:
      case types.success:
      case types.failure:
        const key = mapActionToKey(action);
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.');
        }
        return {
          ...state,
          [key]: updatePagination(state[key], action),
        };
      default:
        return state;
    }
  };
}
