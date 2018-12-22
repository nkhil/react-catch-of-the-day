import React, { Fragment } from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
    render(){
        return(
            <Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header 
                            tagline="Sweet Sweet Fish"  
                            num={23}                  
                        />
                        <Order />
                        <Inventory word="duke" />
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;