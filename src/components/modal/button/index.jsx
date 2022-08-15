import React from 'react';

function ButtonComponent({ handleClick }) {
    return (
        <button type="button" className="btn btn-dark float-end" onClick={() => handleClick(true)}>
          + Employee
        </button>
    )
}

export default ButtonComponent;