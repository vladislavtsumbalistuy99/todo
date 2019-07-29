import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import Popup from "../Popup/Popup";
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "./container";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title:'',
          todo: '',
          showPopup: false,
          activeItem: {
            id: 1,
            title: 1,
            todo: 1
          },
          doneCounter:0,
          importantCounter:0
        };
    };

    changeImportantCounter = (important) => {
      let { importantCounter } = this.state;
      if(important){
        importantCounter++;
        this.setState({importantCounter: importantCounter})
      }
      else{
        importantCounter--;
        this.setState({importantCounter: importantCounter})
      }
    }

    changeDoneCounter = (done) => {
      let { doneCounter } = this.state;
      if(done){
        doneCounter++;
        this.setState({doneCounter: doneCounter})
      }
      else{
        doneCounter--;
        this.setState({doneCounter: doneCounter})
      }
    }

    createNewToDoItem = () => {
      const { todo, title } = this.state;
      this.props.addToDo({
        id: this.props.toDo.length + 1,
        title: title,
        todo: todo,
        done: false,
        important: false
      })
      this.setState(({ todo, title }) => ({
        todo: '',
        title:''
      }));
    };

    handleDeleteTask = (id) =>{
      this.props.deleteToDo(id);
    }

    handleInput = e => {
      this.setState({
        todo: e.target.value
      });
    };

    handleTitleInput = e => {
      this.setState({
        title: e.target.value
      })
    }

    saveEditedTask = (task) => {
      let { list } = this.state
      list.forEach((item)=>{
        if(item.id === task.id){
          list[list.indexOf(item)] = {...task}
        }
      })
      this.setState({list}, ()=>this.closePopup()) 
    }

    closePopup = () => {
      this.setState({showPopup: false})
    }

    showPopup = (item) => {
      this.setState({activeItem:item, showPopup: true}, this.setState({activeItem:item, showPopup: true}))
    }

    render() {
        const { showPopup, doneCounter, importantCounter } = this.state;
        const { toDo } = this.props;
        console.log(this.props)
    
        return (
            <div className="ToDo">
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                      <p>{toDo.length - doneCounter} more to do, {doneCounter} done, {importantCounter} important</p>
                        {toDo.map(({title, todo, id}, key) => {
                          return <ToDoItem
                                      key={key}
                                      title={title}
                                      item={todo}
                                      id={id}
                                      onDelete={this.handleDeleteTask}
                                      editTodo={this.showPopup}
                                      changeDoneCounter = {this.changeDoneCounter}
                                      changeImportantCounter = {this.changeImportantCounter}
                                  />
                          }
                        )}
                    </div>

                    <div>
                      <input type="text" value={this.state.title} onChange={this.handleTitleInput} onKeyPress={this.handleKeyPress} placeholder="Enter title"/>
                      <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder="Enter new todo"/>
                      <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>
                </div>
                {showPopup?
                  (<Popup todo={this.state.activeItem} saveChanges = {this.saveEditedTask} closePopup={this.closePopup}/>)
                :
                  null
                }
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
