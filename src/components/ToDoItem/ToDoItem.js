import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {

    render() {
        const {id, item, onDelete} = this.props;
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text"> 
                    <span>{id}</span> {item} 
                    <button onClick={()=>onDelete(id)}>Хрєстік</button>
                </p>
            </div>
        );
    }
}

export default ToDoItem;
