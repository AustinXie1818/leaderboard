
import { applyMiddleware, createStore, combineReducers } from 'redux';

import ReduxThunk from 'redux-thunk';

import newBoardReducer from '../reducers/new.board.reducer';


const rootReducer = combineReducers({newBoard: newBoardReducer});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default store;
