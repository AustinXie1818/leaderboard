import _ from 'lodash';

const newBoardReducer = (state =  { name: 'New Leader Board', tournaments: [], players: [{name: 'player1'}] }, action) => {
  switch (action.type) {
    case "NEW_BOARD_CREATED":
      return Object.assign({}, state, _.cloneDeep(action.newBoard));
    case "NEW_BOARD_CHANGED":
      return Object.assign({}, state);

    // case "NEW_BOARD_SAVED":
    //   return { name: '', players: []};

    default:
      return state;
  }
};

export default newBoardReducer;