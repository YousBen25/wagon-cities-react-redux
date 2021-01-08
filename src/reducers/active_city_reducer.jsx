const ActiveCityReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === "SELECT_CITY") {
    return action.payload;
  }
  return state;
};
export default ActiveCityReducer;
