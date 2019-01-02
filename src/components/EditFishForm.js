import React, { Component, Fragment } from 'react';

class EditFishForm extends Component {
  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    // 1. Copy the fish that changed
    // 2. Re-assign only the value that changed
    //    with e.currentTarget.name to the new value.
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    }
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
    
  }
  render(){
    
    return(
      <Fragment>
        <div className="fish-edit">
          <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />  
          <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />  
          <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />  
          <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        </div>
      </Fragment>
    );
  }
}

export default EditFishForm;
        
             
