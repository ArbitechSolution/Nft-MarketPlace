import React, { Component } from 'react';
import axios from 'axios';



const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/explore";

class ExploreTwo extends Component {
    state = {
        data: {},
        exploreData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    exploreData: res.data.exploreData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="explore-area">
               <div className="commingSoon">
                   <p>COMMING SOON</p>
               </div>
                <div className="commingSoonWrapper"><p id="demo"></p></div>
            </section>
        );
    }
}

export default ExploreTwo;