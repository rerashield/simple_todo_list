import React from 'react';
import { Link } from 'react-router-dom';

class LandingPageMenu extends React.Component{
    render(){
        return(
            <div>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/alpha">First page</Link>
                </li>

            </div>
        );
    };

}

export { LandingPageMenu }