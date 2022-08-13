import React from 'react';

function ButtonComponent() {
    return (
        <button type="button" className="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target="#addEmployee">
          + Employee
        </button>
    )
}

export default ButtonComponent;