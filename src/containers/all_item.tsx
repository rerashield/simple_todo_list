import * as React from 'react';
import * as LandingMenu from '../components/landing_menu'
import { TodoItem } from '../components/todoItem'
import * as todoList from '../components/todolist'



class AllItem extends React.Component {
    alpha: TodoItem = new TodoItem('A', 'B', new Date());



    render() {
        return (
            <div>
                <h1 className="text-primary">Hello React as TSX all item</h1>
                <LandingMenu.LandingPageMenu></LandingMenu.LandingPageMenu>
                <todoList.Todolist></todoList.Todolist>
            </div>
        );
    };
}

export { AllItem }