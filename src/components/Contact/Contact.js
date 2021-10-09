import React, { Component } from 'react';

import { contractAddress, refDefaultAddress } from "../constant";
const initData = {
    pre_heading: "Profile",
    heading: "Get In Touch",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainAccount: "",
            balance: "",
            mint: "",
            userBalance: ""
        };
        // this.delta = this.delta.bind(this);
    }
    // state = {
    //     initData: {}
    // }
    loadWeb3 = async () => {
        let windows = {}
        let mainAccount;
        let isConnected = false;
        let connection;
        try {
            // console.log("log", window.tronWeb);
            windows.tronWeb = await window.tronWeb
            if (
                windows.tronWeb &&
                windows.tronWeb.defaultAddress.base58 === "undefined"
            ) {
                connection = "TROn LINK is not available";
                isConnected = false;
                console.log("Tron is not installed, please install it on your browser to connect.");
            } else {
                connection = "Connected to Tron LINK.";
                isConnected = true;
                // console.log("Tron is not instal", windows)
                // console.log("Tron is not instal", windows.tronWeb)
                mainAccount = await windows.tronWeb.defaultAddress.base58;

                // setAccount(mainAccount);
                this.setState({ mainAccount: mainAccount });
                // console.log("Tron Not Connected", mainAccount);
                // loadBlockchainData();
                // tttmtoTrx();
                // getreferralAddress();
                this.isLocked();
                if (mainAccount) {
                    if (isConnected === true) {
                        mainAccount = await windows.tronWeb.defaultAddress.base58;
                        // setAccount(mainAccount);
                        // console.log("Tron Not Connected", mainAccount);
                        this.setState({ mainAccount: mainAccount });
                        let accountDetails = null;
                        localStorage.setItem("load", mainAccount);
                        // this.setState({isLoggedIn: false});
                        // setMainAccountDetails(accountDetails);
                    } else {
                        console.log("Tron Not Connected");
                    }
                } else {
                    console.log("Please login or install tron wallet!");
                }
            }
        } catch (error) {
            console.log("error0", error);
        }
    };

    isLocked() {
        if (window.tronWeb.defaultAddress.base58 == null) {
            // console.log("error null");
        } else if (window.tronWeb.defaultAddress.base58 === 0) {
            // console.log("TRON LINK is locked");
        } else {
            // console.log("TRON LINK is unlocked");
        }
    }

    getBalanceOfAccount = async () => {
        try {
            let data = await window.tronWeb.trx.getAccount(this.state.mainAccount);
            let tronbalance;

            // console.log("tronbalance", tronbalance);

            await window.tronWeb.trx.getBalance("TJ3cWF1eh3tJdN2Eb51wYijAbJzjq4WKin", function (err, res) {

                let blnc = parseInt(res) / 1000000;
                tronbalance = blnc;
                // console.log("tronbalance", tronbalance, res)
                // this.setState({ balance: tronbalance });
            });


            let contract = await window?.tronWeb.contract().at(contractAddress);
            const balanceof = await contract.balanceOf(this.state.mainAccount).call();
            this.setState({ userBalance: balanceof.toString() });
            localStorage.setItem("balanceOff", balanceof.toString());

            // console.log("tronbalance", balanceof.toString())

            this.setState({ balance: tronbalance });

            // const balanceof = await contract.balanceOf(this.state.mainAccount).call();
            // this.setState({ mint: balanceof });

        } catch (e) {
            console.log("blnc", e);
        }
    }

    componentDidMount() {
        this.setState({
            initData: initData
        })
        setInterval(() => {
            this.loadWeb3();
            this.getBalanceOfAccount();
        }, 1000);
    }


    render() {
        // loadWeb3();
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            {/* <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div> */}
                            {/* Item Form */}
                            <form id="contact-form" className="item-form card no-hover" method="POST" action="assets/php/mail.php">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <span>Your Wallet</span>
                                            <input type="text" value={this.state.mainAccount} className="form-control" name="Your Wallet" placeholder="Your Wallet" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <span>Your Balance</span>
                                            <input type="email" value={this.state.balance} className="form-control" name="email" placeholder="0.00" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <span>Total Mint</span>
                                            <input type="text" value={this.state.userBalance} className="form-control" name="totalMint" placeholder="0" required="required" />
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="form-group mt-3">
                                            <span>Your Level</span>
                                            <input type="text" className="form-control" name="totalMint" placeholder="0" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <span>Balance Total Trx in Pool</span>
                                            <input type="text" className="form-control" name="totalMint" placeholder="0.00" required="required" />
                                        </div>
                                    </div> */}
                                    {/* <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Message" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div> */}
                                    {/* <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit"><i className="icon-paper-plane mr-2" />Send Message</button>
                                    </div> */}
                                </div>
                            </form>
                            <p className="form-message" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;