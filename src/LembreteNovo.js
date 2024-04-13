import React, { Component } from 'react';

export default class LembreteNovo extends Component {
  render() {
    return (
        <div className='container'>
            <div className="card"
            style={{backgroundColor: 'rgb(141, 216, 255)'}}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="card-body">
                            <div 
                                className="d-flex align-items-center justify-content-center border rounded mb-2 text-white"
                                style={{height: '6rem' , backgroundColor: 'rgb(14, 120, 172)'}}
                            >
                                Hello, lembretes
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
  }
}
