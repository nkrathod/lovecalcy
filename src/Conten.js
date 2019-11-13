import React, { Component } from 'react';
//import './App.css'

class App extends Component{

  constructor(props){
    super(props);

    this.state = { yourname: "Nitesh",
            crushname: "Rathod",
            
    }
  }

  handlechangeall = (event) =>{
    this.setState ({ [event.target.name]:event.target.value})
  }

  handlesubmit = (event) => {
    var lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);

    this.setState({[event.target.lovevalue]:lovedata})

    alert( JSON.stringify(this.state));
    console.log( JSON.stringify(this.state));
    event.preventDefault();

    
  }

  render(){
        return (
            <div className="card-body w-75 m-auto text-center">
                    <form className="form-inline w-75 m-auto" onSubmit = {this.handlesubmit} >
                    <div className="form-group">
                      <input type="text" name="yourname" value={this.state.yourname}
                       onChange={this.handlechangeall} className="form-control text-center" placeholder="Your Name" />
                    </div>
                    <div><span className="pl-4 pr-4"> + </span></div>
                    

                    <div className="form-group">
                      <input type="text" name="crushname" value={this.state.crushname}
                       onChange={this.handlechangeall} className="form-control text-center" placeholder="Love Name"/>
                    </div>
                    </form>
                    <br />
                    <div className="w-75 m-auto">
                      <button type="submit" className="btn btn-success w-50">Click</button>
                    </div>
                    <br />
                    <div>
                    <input type="text" name="result" value={this.state.lovevalue} className="form-control text-center w-25 m-auto" 
                    placeholder="Love Percentage"/>
                    </div>
                    
            </div>
            );
    }
}   

export default App;


