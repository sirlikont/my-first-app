
import React, { useEffect, useState }  from 'react';
import ModalComponent from './modal';
// import CardComponent from './list/Card';
import TitleComponent from './title';
import { useFormik } from 'formik';
import { Container } from 'react-bootstrap';
import EmployeesCard from './list';
import ClipLoader from "react-spinners/ClipLoader";

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
    const [loading, setLoading] = useState(false);
    const  [failing, setFailing] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true)
            let response = await fetch ('http://localhost:3002/employees');
            setLoading(false)

            if(response.status === 200) {
                let data = await response.json();
                setEmployeesList(data)
            } else {
                console.log('Failed to fech users');
                //set error here
            }
        } catch (error) {
            setLoading(false);
            setFailing(true);
            console.log('Failed to fech users');
            //set error here
        }
    }
    fetchData();
    }, []);

    // useEffect(() =>{
    //     console.log(employeesList);
    // }, [employeesList])

    const addEmployee = async (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(values),
            redrict: 'follow'
        };
        try {
            console.log("these are" + values);
            const response = await fetch('http://localhost:3002/employees', requestOptions);
            const employee = await response.json();
            console.log(employee);

            return employee;
        } catch(error) {
            console.log('Failed to post a employee');
        }
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          title: '',
          tribe_id: '',
        },

        onSubmit: async (values, {resetForm}) => {
            const response = await addEmployee(values);
            setEmployeesList((previousEmployees) => [...previousEmployees, response])
            resetForm(); 
        }
   

        // onSubmit: (values, {resetForm}) => {
        //   setEmployeesList((previousEmployees) => [...previousEmployees, {
        //     id: Math.floor(Math.random() * 101),
        //     name: values?.name,
        //     tribe: values?.tribe,
        //     title: values?.title,
        //   }]);
        //   resetForm();
        // },
      });

      return (
        <Container>

            <div className="d-flex flex-row border bg-light">
                <div className="col-xs-6 flex-grow-1">
                    <TitleComponent content="Employees" />
                </div >
            </div>

            <ModalComponent formik={formik}/>

            <div className='contaner'>
                { failing && <p>Something went wrong</p>}
                { loading ? (
                    <div className="loader-container">
                        <ClipLoader color={'#26AD14'} loading={loading} size={100} />
                    </div>
                    ) : (
           
                    <div className='row emloyeecards'>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <EmployeesCard employees={employeesList} setEmployees={setEmployeesList}/>
                            </div>
                        </div>
                    </div>
    
                    )}
                </div>

        </Container>
    )
}

export default EmployeesPage;