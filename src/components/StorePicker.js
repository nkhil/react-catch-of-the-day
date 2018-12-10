import React, { Fragment } from 'react';



class StorePicker extends React.Component {
    render(){
        return (
            <Fragment>
                {/* this is a comment */}
                
                <form action="" className="store-selector"> 
                    <h2>This is a heading</h2>
                    <input type="text" required placeholder="Enter name here" />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        )
    }   
}

export default StorePicker;

