import * as React from 'react'
import { TodoItem } from './todoItem';
// import * as TodoItem from 'todoItem';


// Class definition to declare the state values
class Todolist extends React.Component<{}, { title: string, content: string }> {
    todoItems: Array<TodoItem> = [];

    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.addElements();
    }


    createInputForm() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Content:
                        <input type="text" id="content" value={this.state.content} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    // Changing state to re-rendering the page
    // Using the following method to specify the property needed to change
    handleChange(e: React.FormEvent<HTMLInputElement>) {
        var key: string = e.currentTarget.id;
        var value: string = e.currentTarget.value;
        var obj: any = {};
        obj[key] = value;
        //console.log(key);
        this.setState(obj);
    }

    // After handled the input, reset the state value to re-rendering the page
    handleSubmit(e: React.FormEvent) {
        this.addElement(this.state.title, this.state.content);
        e.preventDefault()
        //console.log(this.todoItems);
        this.setState({ title: '', content: '' });
    }


    addElements() {
        this.todoItems.push(new TodoItem('A', 'B', new Date()));
        this.todoItems.push(new TodoItem('D', 'B', new Date()));
        this.todoItems.push(new TodoItem('A', 'C', new Date()));
        this.todoItems.push(new TodoItem('F', 'F', new Date()));
    }

    addElement(title: String, content: String) {
        this.todoItems.push(new TodoItem(title, content, new Date()));
    }

    render() {
        //this.addElements();
        // For each needed to get the index as the unique key
        // table needed a tbody to store the tr
        return (
            <div>
                {this.createInputForm()}
                <table>
                    <tbody>
                        <tr>
                            <th>Finished?</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Create Time</th>
                        </tr>

                        {this.todoItems.map((t, index) =>
                            <tr key={index}>
                                <td>{t.isFinished()}</td>
                                <td>{t.getTitle()}</td>
                                <td>{t.getContent()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export { Todolist }