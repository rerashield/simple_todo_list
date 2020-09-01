import * as React from 'react';
import * as LandingMenu from '../components/landing_menu'
import { TodoItem } from '../components/todoItem'



class AllItem extends React.Component {
    alpha: TodoItem = new TodoItem('A', 'B', new Date());

    createList() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Finished?</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Create Time</th>
                    </tr>

                    <tr>
                        <td>{this.alpha.isFinished()}</td>
                        <td>{this.alpha.getTitle()}</td>
                        <td>{this.alpha.getContent()}</td>
                    </tr>
                </table>
            </div>
        );
    };

    render() {
        return (
            <div>
                <h1 className="text-primary">Hello React as TSX all item</h1>
                <LandingMenu.LandingPageMenu></LandingMenu.LandingPageMenu>
                {this.createList()}
            </div>
        );
    };
}

export { AllItem }