import * as React from 'react';
import { Route } from 'react-router-dom';
import { First } from './first';
import { Second } from './second';
import { AllItem } from './all_item';


export class App extends React.Component {
    // render() {
    //     return (
    //         <div>
    //             <h1 className="text-primary">Hello React as TSX</h1>
    //         </div>
    //     )
    // };
    render() {
        return (
            <div className="container">
                {/* The corresponding component will show here if the current URL matches the path */}
                {/* <Route path="/" exact component={Index} /> */}
                <Route path="/" exact component={AllItem} />
                <Route path="/alpha" component={ First } />
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