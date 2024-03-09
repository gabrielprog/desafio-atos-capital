import React from 'react';

function ButtonDelete({onClick}) {
  return (
    <button
      className="btn btn-danger"
      onClick={onClick}
    >
      Deletar
    </button>
  );
}

export default ButtonDelete;