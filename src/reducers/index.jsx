export default (state = 0 , action) => {
  switch (action.type) {
    case "increase":
      return state + 1 ;
    case "decrease":
      return state - 1 ;
    case "unmountCounter":
      return state - action.count ;
    default:
      return state;
  }
};
