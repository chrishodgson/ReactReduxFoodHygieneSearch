import {FETCH_LOCAL_AUTHORITIES} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_LOCAL_AUTHORITIES:
            console.log(action.payload.data.authorities, 'reducer_local_authorities- action.payload.data.authorities');

            return action.payload.data.authorities;
    }
    return state;
}