import React, { Component } from 'react';
//import './App.css'

class App extends Component{

	constructor(props)  {
			super(props);

			this.state = { 	result : '',
			  				yourname : '',
			 				crushname : '',
			  				
						}
		}

	handlechangeall = (event) =>{
		this.setState ({ [event.target.name]:event.target.value})
		//this.setState({[event.target.lovevalue]:lovedata})
	}

	
	buttonClick = e => {
		let errors = "";
	//	var nameError = " Enter Your Name";
	//	var crushError = " Enter Crush Name";
		var lovedata = Math.random() * 100;
		lovedata = Math.floor(lovedata);
	//	this.setState({result:lovedata+"%"});


					if(!this.state.yourname){
			  				errors = " Enter Your Name";
			  				//this.setState({ [this.state.errors]:nameError})
			  				
			  			}
			  		if(!this.state.crushname){
			  				//crushError = " Enter Crush Name";
			  				errors=" Enter Crush Name";
			  				//this.setState({ [this.state.errors]:crushError})
			  				
			  			}

		if(errors != "") {
			
			this.setState({result:errors });
		} 
		if(errors == "") {
			
			this.setState({result:lovedata+"%"});
		}  

	}

	render(){
  			return (
    				<div >
          				<form className="form-inline w-75 m-auto row">
            				<div className="form-group ">
            					<input type="text" name="yourname" value={this.state.yourname}
            					 onChange={this.handlechangeall} className="form-control text-center col-xs-6 col-sm-8 col-lg-12" 
            					 placeholder="Your Name" />
            				</div>
            				<br /><br/>
            				<br/>
							<div className="form-group">
            					<input type="text" name="crushname" value={this.state.crushname}
            					 onChange={this.handlechangeall} className="form-control text-center col-xs-6 col-sm-8 col-lg-12" 
            					 placeholder="Crush Name"/>
            				</div>
            			</form>
          					<br />

          					<div className="w-75 m-auto">
          						<button type="submit" className="btn btn-success w-50" onClick = {this.buttonClick}>Click</button>
          					</div>
          					
          					<br />
          					<div>
          					<input type="text" name="lovevalue" value={this.state.result} className="form-control text-center text-danger w-70 m-auto" 
          					placeholder="Love Percentage"/>
          					</div>
          					
   					</div>
  					);
		}
}		

export default App;


