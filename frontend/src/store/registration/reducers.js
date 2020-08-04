import { REGISTRATION_CHANGE_EMAIL_TEXT } from "./actions";

const defaultState = {
    email: '', 
}

export const registrationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            }
    }
    return state;
} 