import React, { Component } from 'react';
import  './App.scss';
import Header from './Header';
import MainLayout from './MainLayout';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <MainLayout/>
            </div>
        );
    }
}

export default App;