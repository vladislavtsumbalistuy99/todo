import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import Logo from '/magisoft/magisale-internship-todo/src/assets/logo.png';
import Popup from "../Popup/Popup";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title:"Wash",    
                    todo: "Wash and take away the Kurzhiy's cup from WC",
                    id:1
                },
                {   
                    title:"Do today",
                    todo: 'Do some rollton and cigarettes',
                    id:2
                }
            ],
            title:'',
            todo: '',
            showPopup: false,
            activeItem: {
              id: 1,
              title: 1,
              todo: 1
            }
        };
    };

    createNewToDoItem = () => {
      // this.setState(({ list, todo }) => ({
      //   list: [
      //       ...list,
      //     {
      //       todo
      //     }
      //   ],
      //   todo: ''
      // }));
        let newState = {...this.state}
        newState.list.push({'title':newState.title, 'todo' : newState.todo, id: newState.list.length+1})
        newState.title = ''
        newState.todo = ''
        this.setState(newState)
      
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

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
      console.log(task)
      let { list } = this.state
      list.forEach((item)=>{
        if(item.id === task.id){
          list[list.indexOf(item)] = {...task}
        }
      })
      this.setState({list}, ()=>this.closePopup()) 
    }
    handleDeleteTask = (id) =>{
      console.log(id);
      let newState = {...this.state}
      for(let i = 0; i < newState.list.length; i++){
        if (newState.list[i].id === id){
          newState.list.pop(i);
          this.setState(newState);
        }
      }
    }
    closePopup = () => {
      this.setState({showPopup: false})
    }
    showPopup = (item) => {
      console.log(item)
      this.setState({activeItem:item, showPopup: true}, this.setState({activeItem:item, showPopup: true}))
    }
    render() {
        const { list, showPopup } = this.state
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">
                        {list.map(({title, todo, id}, key) => {
                                return <ToDoItem
                                            key={key}
                                            title={title}
                                            item={todo}
                                            id={id}
                                            onDelete={this.handleDeleteTask}
                                            editTodo={this.showPopup}
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

export default ToDo;
