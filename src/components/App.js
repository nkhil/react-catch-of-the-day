import React, { Fragment } from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        console.log(fish);
        // 1. Take a copy of existing state
        const fishes = { ...this.state.fishes };
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set that as state
        this.setState({ fishes: fishes });
    };

    render(){
        return(
            <Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header 
                            tagline="Sweet Sweet Fish"  
                            num={23}                  
                        />                                              
                    </div>
                    <Order />
                    <Inventory addFish={this.addFish} />
                </div>
            </Fragment>
        );
    }
}

export default App;