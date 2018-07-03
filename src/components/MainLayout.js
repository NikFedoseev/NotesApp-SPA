import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
import './MainLayout.scss';


class MainLayout extends Component {
    render () {
        return (
            <div className='MainLayout'>
                <Menu/>
                <Main/>
            </div>
        );
    }
}

export default MainLayout;