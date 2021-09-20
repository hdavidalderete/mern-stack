import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="light-blue darken-4">
                {/* This is only navigation */}
                <div className="container">
                    <a className="brand-logo" href="/">
                        Mern Stack
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header;