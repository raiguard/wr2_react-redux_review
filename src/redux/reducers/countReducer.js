// set up initial state
const initialState = {
  total: 0
};

// set up action types
const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";
const RESET_COUNT = "RESET_COUNT";

// set up action creators
export function increaseCount(amt) {
  return {
    type: INCREASE_COUNT,
    payload: amt
  };
}

export function decreaseCount(amt) {
  return {
    type: DECREASE_COUNT,
    payload: amt
  };
}

export function resetCount() {
  return {
    type: RESET_COUNT
  };
}

// set up reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, total: state.total + action.payload };
    case DECREASE_COUNT:
      return { ...state, total: state.total - action.payload };
    case RESET_COUNT:
      return { ...state, total: 0 };
    default:
      return state;
  }
}
