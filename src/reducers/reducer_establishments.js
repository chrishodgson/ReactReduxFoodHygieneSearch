import {FETCH_ESTABLISHMENTS} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ESTABLISHMENTS:
            const localAuthorityCode = action.payload.data.establishments.slice(0,1).pop()['LocalAuthorityCode'] || '';
            const establishments = action.payload.data.establishments || null;

console.log(localAuthorityCode, 'reducer - LocalAuthorityCode');

            return localAuthorityCode ? {...state, [localAuthorityCode]: establishments} : establishments;
    }
    return state;
}