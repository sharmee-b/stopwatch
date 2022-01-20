import {
    createStore
} from "redux";
import timerReducer from './app/reducer';

function configureStore(state = {}) {
    return createStore(timerReducer, state);
}
export default configureStore;