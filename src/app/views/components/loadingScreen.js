import React, { Component } from 'react';


function LoadingScreen(WrappedComponent){
  return class extends Component {
    constructor(props){
      super(props);
      this.state ={
        loading: true,
      }
    }

    async componentDidMount(){

    }
    render(){
      if(this.state.loading === true){
        
      }
    }
  }
}