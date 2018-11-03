export default (state = { highScore: 0 }, action) => {
  switch (action.type) {
    case 'SET_HIGH_SCORE':
      if (action.level > state.highScore) {
        return {
          highScore: action.level
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
