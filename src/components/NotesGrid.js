import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './NotesGrid.scss'

class NotesGrid extends Component {
    masonryOptions = {
        itemSelector: '.Note',
        columnWidth: 250,
        gutter: 10,
        isFitWidth: true
    };
    createNote = (note,index) => {
        return (
            <div key={index} id={index} className='Note' onClick={this.deleteNote}>
                <h2>{note.title}</h2>
                <h2>{note.text}</h2>
            </div>
        )
    };
    deleteNote = (event) => {
        this.props.onNoteDelete(event.target.id);
    };
    render() {
        let notes = this.props.notes;
        let note = notes.map(this.createNote);
        return (
            <Masonry
                className = 'NotesGrid'
                options = {this.masonryOptions}
            >
                {note}
            </Masonry>
        )
    }
}

export default NotesGrid;