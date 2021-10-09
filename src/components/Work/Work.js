import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

class Work extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    workData: res.data.workData
                })
                // console.log(this.state.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">What to know</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="worksWrapper ml-4">
                        <div className="singleWork">
                            <h4>Traits and Rarity </h4>
                            <p>Our ninjas are programmatically curated by a combination of 50+ traits. All ninjas are dope, but some are rarer than others.</p>
                        </div>

                        <div className="singleWork">
                            <h4>Honorary Ninja </h4>
                            <p>There will be ONE honorary ninja minted for the main warrior himself – Justin Sun.</p>
                        </div>
                        <div className="singleWork">
                            <h4>Mint Cost </h4>
                            <p>All Hidden Warriors are 3000 TRX each. There is no bonding curve or FOMO pricing. Inclusivity, equality and community is the code of our ninjas. With a 3,000 supply, the community and respective DAO will be very exclusive.</p>
                        </div>
                        <div className="singleWork">
                            <h4>Deflationary Model </h4>
                            <p>The future of our warriors includes a deflationary model in which you can burn 2 warriors for 1 SUPER warrior. More details to come.</p>
                        </div>



                        <div>
                            <div className="singleWork row">
                                <h4>Beyond the avatar</h4>
                                <p>Hidden Warriors came into existence in an effort to fight for Peace on the TRON Blockchain. These ninjas represent the speed and agility found on TRON. They represent unity and hope, in which the TRON community members remain loyal to.

                                    Hidden Warriors brings the aspect of nostalgia, 8-bit memories into a 2021-bit future. The existence of this reality at present, is a reminder of what this space has evolved from – and where we are heading. Paying homage to TRON and the legacy at large is what we aim to accomplish with this project set forth.</p>
                            </div>
                            <div className="singleWork row properties">
                                <h4>Properties</h4>
                                <ul>
                                    <li>Background </li>
                                    <li>Accessory </li>
                                    <li>Suit </li>
                                    <li>Skin </li>
                                    <li>Eyes </li>
                                    <li>Attribute </li>
                                    <li>Text </li>
                                </ul>
                            </div>
                            <div className="singleWork row">
                                <h4>Utility</h4>
                                <p>Holding a ninja will ensure you are eligible for future activations that are only accessible through this membership

                                    Warrior memberships will be tiered, based on the number of warriors you hold in your wallet.
                                    <br/>
                                    <br/>

                                    Tier 1 – 1 Ninja: standard membership that grants you access to random TRX airdrops and new species airdrops
                                    <br/>
                                    <br/>

                                    Tier 2 – 5 Ninjas: advanced membership will grant you everything from tier 1, as well as special privileges into private discord chats, founders discussions + more
                                      <br/>
                                      <br/>
                                    Tier 3 – 10 Ninjas: exclusive membership will grant you everything from tier 1 + 2, as well as an automatic position on the Board Committee for our DAO
                                       <br/>
                                       <br/>
                                    As the TRON marketplace evolves and we begin to position ourselves for secondary sales, we will implement the first ON-TRON, ON-CHAIN shared revenue program, in which all holders of ninjas will receive a % of 5% from all secondary sales. Hold a ninja = get paid for life. </p>
                            </div>
                            <div className="singleWork row">
                                <h4>Manifesto  </h4>
                                <p>At Perfect Systems, our focus isn’t just Hidden Warriors. It is the TRON community at large as we won’t stay hidden much longer. Through the initial sale and ninja stakeholder recruitment, we will form a DAO to automate decision making and help to facilitate TRON transactions, very much similar to a TRON super representative.

                                    Our DAO will seed future activations and ensure that funding remains adequate as the project evolves across the blockchain. Our DAO will fund future IRL meet-ups, community festivities and roadmap activations. The Hidden Warrior DAO aims to provide a DeFI liquidity pool to automate returns for capital providers and key stakeholders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;