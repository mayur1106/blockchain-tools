import React, { Component } from 'react';
class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-1 shadow">
          <div className="container">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.theblockchainstudies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           The Blockchain Studies | Web3.Js Tools
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-sm-block">
              <small className="text-white"><span id="account">{this.props.account}</span></small>
            </li>
          </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
