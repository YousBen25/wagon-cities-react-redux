const CitiesReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === "SET_CITIES") {
    return action.payload;
  }
  return state;
};
export default CitiesReducer;
