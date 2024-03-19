import React from "react";

function ButtonDefault({children, width, onClick}) {
    return (
        <button
            className={`btn justify-content-center w-${width} bg-red d-flex align-items-center gap-1`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonDefault;