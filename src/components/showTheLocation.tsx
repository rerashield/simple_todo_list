/*
    A test class for Show the location by withRoute function
*/

import React from "react";
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import { connect } from 'react-redux';


// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component<RouteComponentProps> {

    // If in a route, do not need to specify them

//   static propTypes = {
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired,
//     history: PropTypes.object.isRequired
//     // staticContext: PropTypes.object.isRequired
//   };

  render():JSX.Element {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(ShowTheLocation);