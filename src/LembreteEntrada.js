import React, { useState, useRef } from 'react'; 

 

const LembreteEntrada = (props) => { 

  const [novoTexto, setNovoTexto] = useState(''); 

  const placeholder = 'Digite um novo lembrete'; 

  const inputRef = useRef(null); // Create a ref for the input element 

 

  const handleChange = (e) => { 

    setNovoTexto(e.target.value); 

  }; 

 

  const handleSubmit = (e) => { 

    e.preventDefault(); 

    props.atualizarTexto(novoTexto); 

    console.log("Lembrete adicionado:", novoTexto); 
 

    inputRef.current.placeholder = placeholder; 

 

    setNovoTexto(''); 

  }; 

 

  return ( 

    <div className="container"> 

      <div className="d-flex align-items-center justify-content-center"> 

        <form onSubmit={handleSubmit} className="w-100"> 

          <div className="input-group"> 

            <input 

              type="text" 

              value={novoTexto} 

              onChange={handleChange} 

              placeholder={placeholder} 

              className="form-control w-100" 

              ref={inputRef} 

            /> 

          </div> 

          <br /> 

          <div className="d-grid"> 

            <button type="submit" className="btn btn-primary btn-block w-100"> 

              Ok 

            </button> 

          </div> 

        </form> 

      </div> 

    </div> 

  ); 

}; 

 

export default LembreteEntrada; 

 