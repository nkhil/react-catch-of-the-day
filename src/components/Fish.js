import React, { Component, Fragment } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.lock);
    console.log('button clicked')
  }
  
  render(){
  const { name, image, desc, price, status } = this.props.details;
  const isAvailable = status === "available"
    return(
      <Fragment>
        {/* <li className="fish">{this.props.key}</li> */}
        <li className="menu-fish">
          <img src={image} alt={name}/>
          <h3 className="fish-name">
            {name}
            <span className="price">
              {formatPrice(price)}
            </span>
          </h3>
          <p>{desc}</p>
          <button disabled={!isAvailable} onClick={this.handleClick}>
            { isAvailable ? 'Add to Order' : 'Sold Out!' }
          </button>
        </li>
        
      </Fragment> 
    );
  }
}

export default Fish;