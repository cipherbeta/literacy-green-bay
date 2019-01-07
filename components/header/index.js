import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    state = {
        MobileNavOpen: false
    }

    handleMobileNavToggle = () => {
        this.setState({MobileNavOpen: !this.state.MobileNavOpen});
    }

    render(){
        return(
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link href="/">
                    <img src="/static/images/logo.png"/>
                    </Link>
                </div>
                <a role="button" className={"navbar-burger " + (this.state.MobileNavOpen ? "is-active" : "")} 
                aria-label="menu" aria-expanded="false" onClick={this.handleMobileNavToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-start navbar-menu">
                <div className="navbar-item has-dropdown is-hoverable" >
                    <Link href="/"><a className="navbar-item">Home</a></Link>
                </div>
                

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link prefetch href="/about-us"><a className="navbar-item">About Us</a></Link>
                    <div className="navbar-dropdown">
                        <Link href="/about-us/history"><a className="navbar-item">History</a></Link>
                        <Link href="/about-us/videos"><a className="navbar-item">Videos</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/about-us/board-of-directors"><a className="navbar-item">Board of Directors</a></Link>
                        <Link href="/about-us/staff"><a className="navbar-item">Staff</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/about-us/hours-and-facilities"><a className="navbar-item">Hours & Facilities</a></Link>
                        <Link href="/about-us/links-and-resources"><a className="navbar-item">Links & Resources</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/about-us/scholarship"><a className="navbar-item">Scholarship</a></Link>
                    </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link prefetch href="/programs"><a className="navbar-item">Programs</a></Link>
                    <div className="navbar-dropdown">
                        <Link href="/programs/adult-tutoring"><a className="navbar-item">Adult Tutoring</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/programs/english-classes"><a className="navbar-item">English Classes</a></Link>
                        <Link href="/programs/clases-de-ingles"><a className="navbar-item">Clases de Ingles</a></Link>
                        <Link href="/programs/family-literacy"><a className="navbar-item">Family Literacy (GED)</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/programs/citizenship"><a className="navbar-item">Citizenship</a></Link>
                        <Link href="/programs/workforce"><a className="navbar-item">Workforce</a></Link>
                        <div className="navbar-divider"/>
                        <Link href="/programs/computer-lab"><a className="navbar-item">Computer Lab</a></Link>
                    </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link prefetch href="/for-our-tutors"><a className="navbar-item">For Our Tutors</a></Link>
                    <div className="navbar-dropdown">
                        <Link href="/for-our-tutors/monthly-tutoring-report"><a className="navbar-item">Monthly Tutoring Report</a></Link>
                    </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link prefetch href="/events"><a className="navbar-item">Events</a></Link>
                    <div className="navbar-dropdown">
                        <Link href="/events/gallery"><a className="navbar-item">Past Events Gallery</a></Link>
                        <Link href="/events/scrabble-bee-registration"><a className="navbar-item">Scrabble Bee Registration</a></Link>
                    </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable" >
                    <Link href="/contact"><a className="navbar-item">Contact</a></Link>
                </div>
                
            </div>
            <div className="navbar-end navbar-menu">
                <div className="navbar-item">
                    <Link prefetch href="/volunteer"><a className="navbar-item">Volunteer</a></Link>
                </div>
                <div className="navbar-item">
                    <Link prefetch href="/donate"><a href="/" className="navbar-item button is-primary">Donate</a></Link>
                </div>
            </div>
        </nav>
        )
    }
}

export default Header;