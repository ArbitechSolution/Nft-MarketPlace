import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/activity";

class MarketPlace extends Component {
    state = {
        data: {},
        tabData_1: [],
        tabData_2: [],
        tabData_3: [],
        filterData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    tabData_1: res.data.tabData_1,
                    tabData_2: res.data.tabData_2,
                    tabData_3: res.data.tabData_3,
                    filterData: res.data.filterData 
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="activity-area load-more">
             <div className="container">
                <h3>YOUR WALLET</h3>
                <a href="#" className="connectWallet">Connect</a>
             </div>
            </section>
        );
    }
}

export default MarketPlace;