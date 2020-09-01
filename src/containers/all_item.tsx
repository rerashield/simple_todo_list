import * as React from 'react';
import * as LandingMenu from '../components/landing_menu'



class AllItem extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-primary">Hello React as TSX all item</h1>
                <LandingMenu.LandingPageMenu></LandingMenu.LandingPageMenu>
            </div>
        )
    };
}

export { AllItem }