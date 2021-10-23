import React from "react";
import { List, Button } from 'grommet';

import './todos.css';

export type Todo = {
    key: number,
    text: string,
}

interface ITodosProps {
    todos: Todo[],
    onDone: (todo: Todo) => void,
}

class Todos extends React.Component<ITodosProps> {
    constructor(props: ITodosProps) {
        super(props);

        this.action = this.action.bind(this);
    }
    
    action(todo: Todo, index: number) {
        return (
            <Button 
                secondary 
                label='Done' 
                size='small' 
                onClick={() => this.props.onDone(todo)} 
            />
        )
    }

    render() {
        return (
            <div className='Todos'>
                <List 
                    data={this.props.todos} 
                    primaryKey='text'
                    action={this.action}
                />
            </div>
        )
    }
}

export {
    Todos,
}