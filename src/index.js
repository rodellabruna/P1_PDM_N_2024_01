import React from 'react';  
import ReactDOM from 'react-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';  

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import LembreteNovo from './LembreteNovo';  

class App extends React.Component {  

  render() {  
    return (  
      <div className='container'>  
        <br></br>  
        <div className="row justify-content-center">  
            <div className="col-sm-12 col-md-8">  
                <LembreteNovo />  
            </div>  
        </div>  
      </div>  
    );  

  }  
}  
ReactDOM.render(  
  <App />,  
  document.querySelector('#root')  

); 

 

 