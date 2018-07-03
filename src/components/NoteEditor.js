import React, { Component } from 'react';
import './NoteEditor.scss';

class NoteEditor extends Component {
    state = {
        title: '',
        text: '',
        color: '#fff'
    };
    handleTitleChange = (event) =>{
        this.setState({title: event.target.value})
    };
    handleTextChange = (event) =>{
        this.setState({text: event.target.value})
    };
    handleNoteAdd = () => {
        const newNote = {
            title: this.state.title,
            text: this.state.text
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#fff'
        })
    };
    handleNoteClear = () => {
        this.setState({
            title: '',
            text: '',
            color: '#fff'
        })
    };
    render() {
        return (
            <div className='NoteEditor'>
                <div className='group'>
                    <input
                        required={true}
                        type="text"
                        className='NoteEditor__title'
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <span className='bar'/>
                    <label>Title</label>
                </div>
                <div className="group">
                    <textarea
                        required={true}
                        value={this.state.text}
                        rows={5}
                        className='NoteEditor__text'
                        onChange={this.handleTextChange}
                    />
                    <span className='bar'/>
                    <label>Text</label>
                </div>
                <div className='NoteEditor__footer'>
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                    <button
                        className='NoteEditor__button__clear'
                        onClick={this.handleNoteClear}
                    >
                        clear
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;