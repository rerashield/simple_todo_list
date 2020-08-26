import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class MainBoard extends React.Component {
    renderSquare() {
        return <Square />;
    }
    renderLineBreak(){
        return <br />
    }
    render() {
        var renderString = [];
        for (var i = 1; i < 10; i++) {
            renderString.push(this.renderSquare());
            if (i % 3 === 0) {
                renderString.push(this.renderLineBreak());
            }
        }
        return (
            <div>
                {renderString}
            </div >
        );
    }
}

ReactDOM.render(
    <MainBoard />,
    document.getElementById('main')
);