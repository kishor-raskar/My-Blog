import React  from 'react';
import {Link} from 'react-router-dom';

const NavBar =()=>(
    <nav>
        <ul>
            <div>
            <Link to="/">HomePage</Link>
            </div>
            <div>
            <Link to="/About">About</Link>
            </div>
            <div>
            <Link to="/article-List">Article List</Link>
            </div>
        </ul>
    </nav>
);

export default NavBar;