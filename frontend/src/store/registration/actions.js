export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';

export const setEmailText = email => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
});
