import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/general">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active text-light" aria-current="page" to="/general">Home</Link>
                                <Link className="nav-link text-light" to="/business">Business</Link>
                                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                                <Link className="nav-link text-light" to="/general">General</Link>
                                <Link className="nav-link text-light" to="/health">Health</Link>
                                <Link className="nav-link text-light" to="/science">Science</Link>
                                <Link className="nav-link text-light" to="/sports">Sports</Link>
                                <Link className="nav-link text-light" to="/technology">Technology</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
