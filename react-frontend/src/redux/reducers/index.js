// redux/reducers/index.js

import { combineReducers } from 'redux';
import textReducer from './textReducer';
import fragmentReducer from './fragmentReducer';

const rootReducer = combineReducers({
    text: textReducer,
    fragments: fragmentReducer // Adicione o reducer de componentes
});

export default rootReducer;