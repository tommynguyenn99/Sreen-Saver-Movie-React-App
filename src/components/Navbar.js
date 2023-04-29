import React from "react";
import '../styles/nav.css';

function Navbar() {
    return (
        <div className="nav">
        <header>
            <h3 className="logo">Logo</h3>
            <nav>
                <ul>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Favourites</a>
                    </li>
                    <li>
                    <a href="#">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
export default Navbar;

// Potential add? https://blog.logrocket.com/create-react-native-search-bar-from-scratch/