import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">
                            <span>My notes</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;