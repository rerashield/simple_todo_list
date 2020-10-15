import * as React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { First } from './first';
import { Second } from './second';
import { AllItem } from './all_item';

//@withRouter
class App extends React.Component<RouteComponentProps> {
    // render() {
    //     return (
    //         <div>
    //             <h1 className="text-primary">Hello React as TSX</h1>
    //         </div>
    //     )
    // };

    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // }

    // ...
    

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
            console.log(this.props.location.pathname + " / " );
        }
    }

    onRouteChanged() {
        console.log("ROUTE CHANGED");
    }
    render() {
        // Defining the RouteComponentProps props
        const { match, location, history } = this.props;
        // Check if the props are get successfully.
        console.log("In Render: " + location.pathname);
        return (
            <div className="container">
                {/* The corresponding component will show here if the current URL matches the path */}
                {/* <Route path="/" exact component={Index} /> */}
                <Route path="/" exact component={AllItem} />
                <Route path="/alpha" component={First} />
                <Route path="/beta" component={Second} />
            </div>
        );
    }
}




// export class App extends React.Component {
//     render() {
//         return (
//             <Hello />
//         )
//     };
// }

// export const Hello = () => (
//     <h1>Hello World</h1>
//   );

export default withRouter(App);