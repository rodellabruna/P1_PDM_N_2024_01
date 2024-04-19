import React, { Component } from 'react';
import LembreteEntrada from './LembreteEntrada';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default class LembreteNovo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textos: []
        };
    }

    atualizarTexto = (novoTexto) => {
        this.setState({ textos: this.state.textos.concat(novoTexto) });
    }

    removerLembrete = (index) => {
        const newTextos = [...this.state.textos];
        newTextos.splice(index, 1);
        this.setState({ textos: newTextos });
    }

    render() {
        return (
            <div className='container'>
                <div className='card' style={{ backgroundColor: 'lightblue', minHeight: '10vh', padding: '20px' }}>
                    <h2 className="d-flex align-items-center justify-content-center" style={{ color: "rgb(14, 120, 172)" }}>Lista de Lembretes</h2>
                    {this.state.textos.map((texto, index) => (
                        <div key={index} style={{ width: '80%', margin: '0 auto' }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="col-md-8 col-12">
                                    <div className="card-body" style={{ borderRadius: '25px', borderColor: 'black' }}>
                                        <div className="d-flex align-items-center justify-content-between border rounded" style={{ height: '5rem', backgroundColor: 'rgb(14, 120, 172)', color: 'white', padding: '10px', fontSize: '20px' }}>
                                            {texto}
                                            <button onClick={() => this.removerLembrete(index)} style={{background: 'transparent' , border: "none", cursor: "pointer", outline: "none", padding: "0"}}>
                                                <FontAwesomeIcon icon={faTrashCan} style={{color:"white", fontSize: '20px'}} />
                                            </button>
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