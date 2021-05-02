import React from 'react';
import Autocomplete from './Autocomplete';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <p className="navbar-brand">JOB SERACH</p>
                <Autocomplete/>
            </nav>
        )
    }
}

export default Navbar;