import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    {/* Link place des balises "a". Verifier votre DOM pour comprendre*/}
                    <NavLink to='/' exact activeClassName="nav-active">
                        home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeClassName="nav-active">
                        contact 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
