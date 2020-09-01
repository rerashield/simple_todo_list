import * as React from 'react';
import { Navbar } from '../components/menu'


class First extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="text-primary">Hello React as TSX First Item</h1>
            </div>
        )
    };
}

export { First }