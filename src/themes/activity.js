import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Activities from '../components/Activity/Activity';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Explore from '../components/Explore/ExploreOne';

class Activity extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="My Mint" subpage="Pages" page="My Mint" />
                <Activities />
                <Explore/>
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Activity;