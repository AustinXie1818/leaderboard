
import { applyMiddleware, createStore, combineReducers } from 'redux';

import ReduxThunk from 'redux-thunk';

import newBoardReducer from '../reducers/new.board.reducer';
import existingBoardsReducer from '../reducers/existing.boards.reducer';


const rootReducer = combineReducers({ newBoard: newBoardReducer, existingBoards: existingBoardsReducer });
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default store;
