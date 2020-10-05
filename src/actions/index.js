import { createAction } from 'typesafe-actions';

export const messageAction = {
    append: createAction('MESSAGE_APPEND')(),
    close: createAction('MESSAGE_CLOSE')()
}
