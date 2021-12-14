import React, {useState} from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">JPC</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
