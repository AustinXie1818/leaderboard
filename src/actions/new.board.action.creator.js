
const newBoardActionCreators = {
  newBoardAction: (newBoard) => {
    return {type: 'NEW_BOARD_CREATED', newBoard};
  }
};


export default newBoardActionCreators;