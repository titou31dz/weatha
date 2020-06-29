const weatherReducer = (state, action) => {
  switch (action.type) {
    case "SENDING_REQUIST":
      return {
        ...state,
        loading: true,
      };
    case "REQUIST_FINISHED":
      return {
        ...state,
        loading: false,
      };
    case "GET_WEATHER":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default weatherReducer;
