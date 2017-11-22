
import _ from 'lodash';

const existingBoardsReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_BOARD_SAVED":
      return [...state, _.cloneDeep(action.newBoard)];

    default:
      return state;
  }
};

export default existingBoardsReducer;