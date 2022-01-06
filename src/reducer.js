export default (state, action) => {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        isJoined: action.payload,
      };

    default:
      return state;
  }
};
