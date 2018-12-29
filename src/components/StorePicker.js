import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    storeNameInput = React.createRef();

    goToStore = (e) => {
        // Stop the form from submitting...
        e.preventDefault();
        // Get the text from that input
        const storeName = this.storeNameInput.value.value;
        // Go to /store/:storeID
        this.props.history.push(`/store/${storeName}`);
    }

        
    render(){
        return (
            <Fragment>
                <form 
                    className="store-selector"
                    onSubmit = {this.goToStore}
                > 
                    <h2>Enter a store name</h2>
                    <input 
                        type="text" 
                        required 
                        placeholder="Enter name here" 
                        defaultValue={getFunName()}
                        ref = {this.storeNameInput}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        )
    }   
}

export default StorePicker;

