import _ from "lodash";
import {FETCH_LOCAL_AUTHORITIES} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_LOCAL_AUTHORITIES:
            return _.mapKeys(action.payload.data.authorities, 'LocalAuthorityId');
    }
    return state;
}