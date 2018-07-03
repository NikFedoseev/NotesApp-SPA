import React, { Component } from 'react';
import NoteEditor from "./NoteEditor";
import NotesGrid from "./NotesGrid";
import NotesAction from '../action/action';
import './Main.scss';

class Main extends Component {
    state = {
        notes: []
    };
    handleNoteAdd = (data) => {
        //console.log(data);
        this.setState ( (prevState)=> {
            return {
                notes: prevState.notes.concat(data)
            };
        });
       //NotesAction.createNote(data);
    };
    handleNoteDel =(note) => {
        this.setState ( {
            notes: this.state.notes.splice(note,1)
        });

    };

    render() {
        return (
            <div className="main">
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes = {this.state.notes} onNoteDelete={this.handleNoteDel}/>
            </div>
        );
    }
}

export default Main;