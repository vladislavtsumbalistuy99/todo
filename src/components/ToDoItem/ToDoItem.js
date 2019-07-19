import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {

    state = {
        done: false,
        important: false
    }

    handleLabelClick = () => {
        if (this.state.done){
            this.setState({
                done: false 
            })
            this.props.changeDoneCounter(false)
        } else {
            this.setState({
                important:false,
                done: true
            })
            this.props.changeDoneCounter(true)

        }
    }

    handleImportantClick = () => {
        if (this.state.important){
            this.setState({
                important: false
            })
            this.props.changeImportantCounter(false)
        } else {
            this.setState({
                important: true
            })
            this.props.changeImportantCounter(true)
        }
    }

    render() {
        const { id,title,item,onDelete, editTodo } = this.props;
        const { done, important } = this.state;
        
        let classNames = '';
        if (done) {
            classNames += ' done';
        } 

        if (important) {
            classNames +=  ' important';
        }

        // {important ? classNames += ' important': null}
        // {done ? classNames += ' done': null};  

        return (
            
            <div className="ToDoItem">
                <div className="ToDoItem-Text"> 
                    <p>Title: {title}</p> 
                    <p className ={classNames} onClick = {this.handleLabelClick}><span>{id}. </span>{item}</p>  
                    <button onClick={()=>editTodo({id, title, todo: item})}>Edit</button>
                    <button onClick={this.handleImportantClick}>!</button>
                    <button onClick={()=>onDelete(id)}>Х</button>
                </div>
            </div>
        );
    }
}

export default ToDoItem;
