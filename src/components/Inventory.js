import React, { Fragment } from 'react';

class Inventory extends React.Component {
       
    render(){
    
    const something = Math.floor((Math.random() * 100) + 1);
        return (
            <Fragment>
                <h1>Your lucky number today is { something }</h1>
                <h2>..and your lucky word is { this.props.word }</h2>
            </Fragment>
        )
    }
}

export default Inventory;