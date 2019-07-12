import React, { PropTypes } from 'react';import './style.css'

class Popup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.todo.id,
      title : this.props.todo.title,
      todo : this.props.todo.todo
    }
  }
  handleEditSubmit = () => {
    this.props.saveChanges(this.state)
  }
  handleInputChange = e => {
    this.setState({[e.target.id]:e.target.value})
  }
  render(){
    console.log(this.props)
    const { isVisible, closePopup} = this.props
    const {title, todo} = this.props.todo
    return(
      <div className='pop-up' > {/*style={{display: isVisible? 'flex' : 'none'}}*/}
        <div className="pop-up-inner">
          <input type='text' id='title' defaultValue={title} onChange={this.handleInputChange} />
          <input type='text' id='todo' defaultValue={todo} onChange={this.handleInputChange} />
          <button onClick={this.handleEditSubmit}>Save</button>
          <button onClick={closePopup} >Cancel</button>
        </div>
      </div>
    )
  }
}

export default Popup;
