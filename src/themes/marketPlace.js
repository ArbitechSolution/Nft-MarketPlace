import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import MarketPlaces from '../components/MarketPlace/MarketPlace';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Explore from '../components/Explore/ExploreOne';

class MarketPlace extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="My Mint" subpage="Pages" page="My Mint" />
                <MarketPlaces />
                <Explore/>
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default MarketPlace;