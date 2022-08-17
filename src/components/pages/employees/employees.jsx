
import React, { useEffect, useState }  from 'react';
import ModalComponent from './modal';
// import CardComponent from './list/Card';
import TitleComponent from './title';
import { useFormik } from 'formik';
import { Container } from 'react-bootstrap';
import EmployeesCard from './list';

function EmployeesPage() {

    // const [employeesList, setEmployeesList] = useState([
    //     {
    //         id: 1,
    //         name: "Zohaib",
    //         title: "FullStack Dev",
    //         tribe: 1,
    //     },
    //     {
    //         id: 2,
    //         name: "Mykhailo",
    //         title: "Eng.Learn&Dev Lead",
    //         tribe: 2,
    //     },
    //     {
    //         id: 3,
    //         name: "Sirli",
    //         title: "Intern",
    //         tribe: 3,
    //     },
    // ]);

    const [employeesList, setEmployeesList] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            let response = await fetch ('http://localhost:3002/employees');

            if(response.status === 200) {
                let data = await response.json();
                setEmployeesList(data)
            } else {
                console.log('Failed to fech users');
                //set error here
            }
        } catch (error) {
            console.log('Failed to fech users');
            //set error here
        }
    }
    fetchData();
    }, []);

    // useEffect(() =>{
    //     console.log(employeesList);
    // }, [employeesList])


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

            <div className="d-flex flex-row border bg-light">
                <div className="col-xs-6 flex-grow-1">
                    <TitleComponent content="Employees" />
                </div >
            </div>

            <ModalComponent formik={formik}/>
           
            <div className='row emloyeecards'>
                <div className="col-lg-4 col-md-6">
                    <div>
                        <EmployeesCard employees={employeesList} setEmployees={setEmployeesList}/>
                     </div>
                 </div>
            </div>
    
        </Container>
    )
}

export default EmployeesPage;