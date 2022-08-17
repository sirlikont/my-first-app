
import React, { useEffect, useState }  from 'react';

import TableComponent from './table'
import ButtonComponent from './button';
import ModalComponent from './modal';
import CardComponent from './list/Card';
import TitleComponent from './title';
import TribeTable from './tribes'
import { useFormik } from 'formik';
import { Container } from 'react-bootstrap';
import EmployeesCard from './list';

function ContainerComponent() {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [employeesList, setEmployeesList] = useState([
        {
            id: 1,
            name: "Zohaib",
            title: "FullStack Dev",
            tribe: 1,
        },
        {
            id: 2,
            name: "Mykhailo",
            title: "Eng.Learn&Dev Lead",
            tribe: 2,
        },
        {
            id: 3,
            name: "Sirli",
            title: "Intern",
            tribe: 3,
        },
    ]);

    const formik = useFormik({
        initialValues: {
          name: '',
          title: '',
          tribe: '',
        },
        onSubmit: (values, {resetForm}) => {
          setEmployeesList((previousEmployees) => [...previousEmployees, {
            id: Math.floor(Math.random() * 101),
            name: values?.name,
            tribe: values?.tribe,
            title: values?.title,
          }]);
          resetForm();
        },
      });

      return (
        <Container>
            <div className='Container'>
                <div className="border bg-light">
  <div>
    <TitleComponent content="Tribes" />
  </div>
            </div>

            <TribeTable/>
            <div className="d-flex flex-row border bg-light">
                <div className="col-xs-6 flex-grow-1">
                    <TitleComponent content="Employees" />
                </div >


                {/* <div className="col-xs-6">
                    <ButtonComponent handleClick={handleShow} />
                </div>  */}
            </div>

            <ModalComponent formik={formik}/>
            {/* <form onSubmit={formik.handleSubmit}>
  <label htmlFor="name">Name</label>
  <input
    id="name"
    name="name"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.name}
  />

  <label htmlFor="occupation">Occupation</label>
  <input
    id="occupation"
    name="occupation"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.occupation}
  />

  <select value={formik.values.tribe} onChange={(e) => formik.setFieldValue('tribe', e.target.value)}>
    <option value="1">Rigas</option>
    <option value="2">Billing</option>
    <option value="3">Internstellar</option>
  </select>

  <button type="submit">Submit</button>
            </form> */}



            <div className='row emloyeecards'>
                <div className="col-lg-4 col-md-6">
                    <div>
                        <EmployeesCard employees={employeesList}/>
                     </div>
                 </div>
                {/* <div>
                <CardComponent/>
                </div>

                <div>
                <CardComponent/>
                </div>

                <div>
                <CardComponent/>
                </div>

                <div>
                <CardComponent/>
                </div> */}
   </div>

</div>
    
        </Container>
    )
}

export default ContainerComponent;