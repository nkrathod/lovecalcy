import React,{Component} from 'react';
import App from './App';
import './cardbody.css';

class Cardbody extends Component{
	render(){
		return <div className="card w-50 m-auto text-center" >
              
		            
                <div className="card-header bg-danger text-white">Love Calculator</div>
                
                <div className="card-body w-50 m-auto text-center">
          			   <App />
                </div>
                
          			
                <div className="card-footer bg-secondary">God Bless Your Relationship</div>
		       </div>
	}
}

export default Cardbody;