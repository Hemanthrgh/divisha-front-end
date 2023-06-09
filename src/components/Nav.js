import React from 'react';
import logo from './images/white-logo.png';

export default function Nav() {
  return (
    <div className='Nav'>
      <nav className="navbar navbar-expand-xl"><div className="header-mobile d-flex d-xl-none flex-fill justify-content-between align-items-center"><div className="navbar-toggler toggle-icon collapsed"><span></span></div><a className="navbar-brand navbar-brand-mobile" href="/"><img src={logo} width="60" height="60" alt="Startupz World"/></a><a className="mobile-button-search" data-gtf-mfp="true" data-mfp-options="{&quot;type&quot;:&quot;inline&quot;,&quot;mainclassName&quot;:&quot;mfp-move-from-top mfp-align-top search-popup-bg&quot;,&quot;closeOnBgClick&quot;:false,&quot;showCloseBtn&quot;:false}" href="/#search-popup"><i className="far fa-search"></i></a></div><div className="collapse navbar-collapse " id="navbar-main-menu"><a className="navbar-brand d-none d-xl-block mr-auto" href="/"><img src={logo} width="60" height="60" alt="Startupz World"/></a><ul className="navbar-nav"><li className="nav-item"><a className="nav-link" href="/">Home</a></li><li className="nav-item"><a className="nav-link" href="/startup">Startup</a></li><li className="nav-item"><a className="nav-link" href="/investor">Investor</a></li><li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li></ul><div className="header-customize justify-content-end align-items-center d-none d-xl-flex"><div className="header-customize-item"><a cla="link" data-gtf-mfp="true" data-mfp-options="{&quot;type&quot;:&quot;inline&quot;}" href="/startup/login"><span className="fas fa-user-circle pr-2"></span>Log In</a></div><div className="header-customize-item button"><a className="btn btn-primary btn-icon-right" href="/startup/register">Add Listing<i className="far fa-angle-right"></i></a></div></div></div></nav>
    </div>
  )
}
