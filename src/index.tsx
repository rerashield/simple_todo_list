import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app';
import ShowTheLocation from './components/showTheLocation';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Second } from './containers/second';


// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square">
//                 {/* TODO */}
//             </button>
//         );
//     }
// }

// class MainBoard extends React.Component {
//     renderSquare() {
//         return <Square />;
//     }
//     renderLineBreak() {
//         return <br />
//     }
//     render() {
//         var renderString = [];
//         for (var i = 1; i < 10; i++) {
//             renderString.push(this.renderSquare());
//             if (i % 3 === 0) {
//                 renderString.push(this.renderLineBreak());
//             }
//         }
//         return (
//             <h1 className="text-primary">Hello React as TSX</h1>
//             // <div>
//             //     <h1 className="text-primary">Ok</h1>
//             //     <div>
//             //         {renderString}
//             //     </div >
//             // </div>
//         );
//     }
// }

// ReactDOM.render(
//     <MainBoard />,
//     document.getElementById('main')
// );

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App />
            {/* <ShowTheLocation /> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById('main')
);