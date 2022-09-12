import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-center text-white">
                <div className="container my-3">

                    <div className="container p-4 pb-0">
                    </div>

                    <div className="text-center p-3" style={{ ackgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>



                </div>


            </footer>
        )
    }
}
