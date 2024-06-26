import React, { Component } from 'react'; 

const LembreteItem = ({ texto }) => { 
  return ( 
    <li>{texto}</li> 
  ); 
}; 
export default class LembreteLista extends Component { 
  render() { 
  return ( 
      <div> 
        <h2>Lista de Lembretes</h2> 
        <ul> 
          {lembretes.map((lembrete, index) => ( 
            <LembreteItem key={index} texto={lembrete} /> 
          ))} 
        </ul> 
      </div> 
    ); 
  } 
} 
