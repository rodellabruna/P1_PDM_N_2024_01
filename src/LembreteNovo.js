import React, { Component } from 'react';
import LembreteEntrada from './LembreteEntrada';
 
export default class LembreteNovo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textos: [
                "Preparar Aula de Programação",
                "Fazer feira",
                "Preparar marmitas"
            ]
        };
    }
 
    atualizarTexto = (novoTexto, index) => {
        const newTextos = [...this.state.textos];
        newTextos[index] = novoTexto;
        this.setState({ textos: newTextos });
    }
 
    render() {
        return (
            <div className='container'>
                <div className='card' style={{ backgroundColor: 'lightblue', minHeight: '40vh', padding: '20px' }}>
                    {this.state.textos.map((texto, index) => (
                        <div key={index} style={{ width: '80%', margin: '0 auto' }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="col-md-8 col-12">
                                    <div className="card-body" style={{borderRadius: '25px', borderColor: 'black'}}>
                                        <div className="d-flex align-items-center justify-content-center border rounded mb-1" style={{ height: '5rem', backgroundColor: 'rgb(14, 120, 172)', color: 'white'  }}>
                                            {texto}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    ))}
                </div>
                <br></br>
                <LembreteEntrada atualizarTexto={this.atualizarTexto} />
            </div>        
        );
    }
}


 