import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Navbar from './navbar/navbar';
import Main from './main/main';
import features from './features/feature.json'
class App extends Component {

  async componentDidMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      this.setState({web3:window.web3});
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
        }
      }
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      this.setState({web3:window.web3});
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async getFeatureFunctions(param){
      window.alert(param)
  }
  async getNetworkId(){
    const networkId = await this.state.web3.eth.net.getId()
    console.log(networkId)
    this.setState({networkId})
  }
  async loadBlockchainData() {
    // Load account
    const accounts = await this.state.web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  
  constructor(props){
    super(props)
    this.state = {
      account:'',
      productCount:0,
      products:[],
      loading:true,
      features:features.features
    }
    this.getFeatureFunctions = this.getFeatureFunctions.bind(this)
  }
 

  render() {
    return (
      <div>
        <Navbar account={this.state.account} /> 
        <Main featureFunctions = {this.getFeatureFunctions} features={this.state.features}/>
      </div>
    );
  }
}

export default App;
