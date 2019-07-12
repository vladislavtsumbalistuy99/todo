import React, {Component} from 'react';
import './ToDoItem.css';


class ToDoItem extends Component {

    render() {
        const {id,title,item,onDelete, editTodo} = this.props;
        return (
            <div className="ToDoItem">
                <div className="ToDoItem-Text"> 
                    <p>Title: {title}</p> 
                    <span>{id}</span>  {item} 
                    <button onClick={()=>onDelete(id)}>Х</button>
                    <button onClick={()=>editTodo({id, title, todo: item})}>Edit</button>
                </div>
            </div>
        );
    }
}

export default ToDoItem;
