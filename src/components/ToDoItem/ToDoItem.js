import React, {Component} from 'react';
import './ToDoItem.css';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "./container";

class ToDoItem extends Component {

    handleLabelClick = (id) => {
        this.props.addDone(id);

        // if (this.state.done){
        //     this.setState({
        //         done: false 
        //     })
        //     this.props.changeDoneCounter(false)
        // } else {
        //     this.setState({
        //         important:false,
        //         done: true
        //     })
        //     this.props.changeDoneCounter(true)

        // }
    }

    handleImportantClick = (id) => {
        this.props.addImportant(id);

        // if (this.state.important){
        //     this.setState({
        //         important: false
        //     })
        //     this.props.changeImportantCounter(false)
        // } else {
        //     this.setState({
        //         important: true
        //     })
        //     this.props.changeImportantCounter(true)
        // }
    }

    render() {
        const { id,title,item,onDelete, editTodo, toDo } = this.props;
        
        let classNames = ' ';
        for (let i=0; i<toDo.length; i++){
            if (toDo[i].done){
                classNames += ' done';
            }
            if (toDo[i].important){
                classNames += ' important';
            }
          }

        return (
            
            <div className="ToDoItem">
                <div className="ToDoItem-Text"> 
                    <p>Title: {title}</p>
                    <div>
                        <p className={classNames} onClick = {() => this.handleLabelClick(id)}>{item}</p>  
                        <div className="btns">
                            <button onClick={()=>editTodo({id, title, todo: item})}>Edit</button>
                            <button onClick={() => this.handleImportantClick(id)}>!</button>
                            <button onClick={()=>onDelete(id)}>Х</button>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToDoItem);
