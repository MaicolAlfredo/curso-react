export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [...state, action.payload],
      };
    default:
      return state;
  }
};
