import React, { Fragment } from 'react';

class Inventory extends React.Component {
    handleClick = () => {
        console.log('handleClick just got calleddd!!!')
    }
    someFunction = Math.floor((Math.random() * 100) + 1);

    render(){    
    
        return (
            <Fragment>
                <h1>Your lucky number today is { this.someFunction }</h1>
                <h2>..and your lucky word is { this.props.word }</h2>
                {/* <button onClick={ this.handleClick }>Click me</button> */}
            </Fragment>
        )
    }
}

export default Inventory;