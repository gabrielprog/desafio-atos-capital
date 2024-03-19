import React from "react";

function ButtonEdit({onClick}) {
    return (
        <button
            className="btn btn-primary"
            onClick={onClick}
        >
      Editar
        </button>
    );
}

export default ButtonEdit;