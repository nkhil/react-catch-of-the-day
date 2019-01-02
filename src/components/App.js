import React, { Fragment } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;
        // First, check for Localstorage...
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef){
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        }); 
    }
    
    componentDidUpdate(){
        // console.log(JSON.stringify(this.state.order));
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));        
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);        
    }

    addFish = (fish) => {
        console.log(fish);
        // 1. Take a copy of existing state
        const fishes = { ...this.state.fishes };
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set that as state
        this.setState({ fishes: fishes });
        // This can also just be `fishes`.
    };

    loadSampleFishes = () => {
        // console.log('LoadSampleFishes() called...');
        this.setState( { fishes: sampleFishes } );        
    };

    addToOrder = (key) => {
       const order = { ...this.state.order };
       order[key] = order[key] + 1 || 1;
       this.setState( { order: order } );
        
    };

    updateFish = (key, updateFish) => {
        //1. Take a copy of fishes
        const fishes = { ...this.state.fishes };
        fishes[key] = updateFish;
        this.setState({ fishes: fishes });
    }

    render(){
        return(
            <Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header 
                            tagline="Sweet Sweet Fish"  
                            num={23}                  
                        />  
                        <ul className="fishes">
                        {/* <Fish /> */}
                        {/* {console.log(this.state.order)} */}
                        {/* {console.log(Object.keys(this.state.fishes).map(key => 'key is ' + key))} */}
                        
                            {
                                Object.keys(this.state.fishes)
                                    .map(key => (
                                        <Fish 
                                            key={key} 
                                            lock={key} 
                                            details={this.state.fishes[key]} 
                                            addToOrder={this.addToOrder} 
                                        />)
                                    )
                            }
                        </ul>                                            
                    </div>
                    <Order 
                        fishes={this.state.fishes}
                        order={this.state.order}
                    />
                    <Inventory 
                        addFish={this.addFish} 
                        loadSampleFishes = {this.loadSampleFishes}
                        fishes={this.state.fishes}
                        updateFish={this.updateFish}
                    />
                </div>
            </Fragment>
        );
    }
}

export default App;