import React from 'react'
import { Button } from '../../components'
import BrandIcon from '../IconText'

export default function Header(props) {

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <BrandIcon />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/actors")}`}>
                <Button className="nav-link" type="link" href="/actors">
                  Actors
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/others")}`}>
                <Button className="nav-link" type="link" href="/others">
                  Others
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
