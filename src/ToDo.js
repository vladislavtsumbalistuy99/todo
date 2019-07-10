import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    'todo': "Wash and take away the Kurzhiy's cup from WC",
                    id:1
                },
                {
                    'todo': 'Do some rollton and cigarettes',
                    id:2
                }
            ],
            todo: ''
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

        newState.list.push({'todo' : newState.todo, id: newState.list.length+1})
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
    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.state.list.map((item, key) => {
                                return <ToDoItem
                                            key={key}
                                            item={item.todo}
                                            id={item.id}
                                            onDelete={this.handleDeleteTask}
                                        />
                          }
                        )}
                    </div>

                    <div>
                       <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
