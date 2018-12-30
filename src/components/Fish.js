import React, { Component, Fragment } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {

  render(){
  const { name, image, desc, price, status } = this.props.details;
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
          <button>Add to cart</button>
        </li>
      </Fragment> 
    );
  }
}

export default Fish;