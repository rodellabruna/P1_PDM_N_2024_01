import React, { Component } from 'react'; 

import LembreteEntrada from './LembreteEntrada'; 


export default class LembreteNovo extends Component { 

    constructor(props) { 

        super(props); 

        this.state = { 

            texto: "Hello, Lembrete", 

        }; 

    } 

 

    atualizarTexto = (novoTexto) => { 

        this.setState({ texto: novoTexto }); 

    } 

 

    render() { 

        return ( 

            <div className='container'> 

                <div className="card" style={{ backgroundColor: 'rgb(141, 216, 255)' }}> 

                    <div className="d-flex align-items-center justify-content-center"> 

                        <div className="col-md-8 col-12"> 

                            <div className="card-body"> 

                                <div className="d-flex align-items-center justify-content-center border rounded mb-2 text-white" style={{ height: '6rem', backgroundColor: 'rgb(14, 120, 172)' }}> 

                                    {this.state.texto} 

                                </div> 

                            </div> 

                        </div> 

                    </div> 

                </div> 

                <br></br> 

 

                <LembreteEntrada atualizarTexto={this.atualizarTexto} /> 

 

            </div> 

        ); 

    } 

} 

 

 