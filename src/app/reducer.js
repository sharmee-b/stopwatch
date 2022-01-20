import {
    START,
    STOP
} from './actions';

const timerReducer = (state = {
    val: "no"
}, action) => {
    console.log("--------reducer", state);

    switch (action.type) {
        case START: {
            state.val = "yes";
            return state;
        }
        case STOP: {
            state.val = "no";
            return state;
        }
        default: {
            return state;
        }
    }
}

export default timerReducer