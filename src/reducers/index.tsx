import { combineReducers } from 'redux';
import reInit from './init'
import reEbook from '../modules/addons/ebook/reEbook';
export default combineReducers({
    reInit,
    reEbook
})