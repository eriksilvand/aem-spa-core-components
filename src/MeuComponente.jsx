// MeuComponente.jsx
import React from 'react';

const MeuComponente = ({ titulo, descricao, className }) => (
  <div className={`text-center ${className}`}>
    <h1>{titulo}</h1>
    {descricao && <p>{descricao}</p>}
  </div>
);

export default MeuComponente;
