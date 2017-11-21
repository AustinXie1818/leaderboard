
const newBoardReducer = (state = { name: '', players: []}, action) => {
  switch (action.type) {
    case "NEW_BOARD_CREATED":
      return Object.assign({}, state, action.newBoard);
    case "NEW_BOARD_CHANGED":
      return Object.assign({}, state);

    case "NEW_BOARD_SAVED":
      return { name: '', players: []};

    default:
      return state;
  }
};

export default newBoardReducer;