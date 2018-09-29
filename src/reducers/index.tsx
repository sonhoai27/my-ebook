import { combineReducers } from 'redux';
import reInit from './init'
import reOrderEbook  from '../modules/client/ebook/reEbook';
export default combineReducers({
    reInit,
    reOrderEbook
})