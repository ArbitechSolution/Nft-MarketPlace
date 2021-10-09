import React, { Component } from 'react';


class RoadMap extends Component {


    render() {
        return (
              <div className="roadMapWrapper">
                  <div className="intro">
                    <div class="intro-content"><span>Time Line</span><h3 class="mt-3 mb-0">Our Warrior Road Map</h3></div>
                  </div>
                  <div className="roadMapSingle">
                     <h4>Initial Launch</h4>
                     <li>The initial sale will take place on our website (www.hiddenwarriors.io). Each ninja will retain full commercial rights for as long as ownership is retained.</li>
                  </div>

                  <div className="roadMapSingle">
                     <h4>25% Sale </h4>
                     <li>Randomly selected collectors will receive a <em>500 TRX Airdrop</em></li>
                  </div>

                  <div className="roadMapSingle">
                     <h4>50% Sale </h4>
                     <li>Community recruiting will begin and ninjas will be assigned user roles within Discord. There will be appointed community leaders (based on # of holdings in wallet). </li>
                  </div>

                  <div className="roadMapSingle">
                     <h4>75% Sale</h4>
                     <li>We will introduce community incentives and project expansions, such as an 8-bit Hidden Warrior game and scavenger hunts to encourage community involvement that will reward active participants. </li>
                  </div>

                  <div className="roadMapSingle">
                     <h4>100%</h4>
                      <ul>
                        <li>We donate 5% of earnings to the Abandoned Children’s Fund (https://www.abandonedchildrensfund.org/) </li>
                        <li>We will reveal a TRON Blockchain party and formally invite Justin Sun</li>
                        <li>We will launch The Zen Garden – an exclusive club for holders to catch good vibes and chill to music </li>
                        <li>We will secure a piece of land in the metaverse for ninja holders to build, explore and engage </li>
                        <li>Marketplace development/launch for secondary sales </li>
                        <li>We will AIRDROP all holders a complimentary NEW version 2 warrior/counterpart </li>
                        <li>Collaboration + Partnerships with TRON based projects</li>
                      </ul>
                  </div>
              </div>  
        );
    }
}

export default RoadMap;