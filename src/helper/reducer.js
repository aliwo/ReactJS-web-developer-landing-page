
const initialState = {
  letterfly: false,
  mendel: false
};

export default function reducer(state=initialState, action) {
  let result = state;
  switch(action.type) {
    case 'OPEN':
      result[action.id] = true;
      return result;
    case 'CLOSE':
      result[action.id] = false;
      return result;
    default:
      return state;
  }
}
