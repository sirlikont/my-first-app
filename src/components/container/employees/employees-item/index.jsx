import React from 'react';

export default function EmployeeItem({ employee, handleDeletion }) {

return (
    <div className="border bg-light flex-parent mt-4 p-4">
    <div className="col-lg-3 p-3">
      <img src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
        className="img-thumbnail" />
    </div>
    <div className="col-lg-7 flex-parent">
      <div className="flex-child p-3">
        <div className="name">{employee.name}</div>
        <div className="occupation">{employee.title}</div>
        <div className="tribe">{employee.tribe}</div>
      </div>
    </div>
    <div className="col-lg-3 p-3 ">
      <div className="d-flex">
        <button className="btn btn-danger" onClick={() => handleDeletion(employee.id)}><i className="fa fa-trash"></i></button>
      </div>
    </div>
  </div>
    )       
}


