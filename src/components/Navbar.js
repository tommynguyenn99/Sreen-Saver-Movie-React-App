import React from "react";


function Navbar() {
    return (
        <header>
            <h3 className="logo">Logo</h3>
            <nav>
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">Favourites</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;

// Potential add? https://blog.logrocket.com/create-react-native-search-bar-from-scratch/