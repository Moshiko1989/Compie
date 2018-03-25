import React from 'react';
import { MyAutoComlete } from '../MyAutoComlete/MyAutoComlete';


export const Header = props => {
    return (
        <header className="Header">
            <MyAutoComlete />
        </header>
    )
}