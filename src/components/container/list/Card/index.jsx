import React from 'react';
import styles from './styles.css'

function CardComponent({
  employee,
  handleDelete,
}) {

    function getTribeName(tribeId) {
      const tribes = {
        1: 'Rigas',
        2: 'Billing',
        3: 'Internstellar'
      }

      return tribes[tribeId];
    }

    return (
        <div className="border bg-light flex-parent mt-4 p-4">
          <div className="col-lg-3 p-3">
            <img src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
              className="img-thumbnail" />
          </div>
          <div className="col-lg-7 flex-parent">
            <div className="flex-child p-3">
              <div className="name">{employee.name}</div>
              <div className="title">{employee.title}</div>
              <div className="tribe">{getTribeName(employee.tribe)}</div>
            </div>
          </div>
          <div className="col-lg-3 p-3 ">
            <div className="d-flex">
              <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>
          </div>
        </div>
    )
}

export default CardComponent;
 