import Dispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

const NoteAction = {
    createNote: (note) => {
        console.log('note created', note);
    }
};

export default NoteAction;