import React, { useEffect, useState }  from 'react';
import EmployeesItem from './Card'

function EmployeesCard({employees, setEmployees}) {
    // const [employees, setEmployees] = useState(
    //     [
    //         {
    //             id: 1,
    //             name: "Zohaib",
    //             title: "FullStack Dev",
    //             tribe: "Rigas",
    //         },
    //         {
    //             id: 2,
    //             name: "Mykhailo",
    //             title: "Eng.Learn&Dev Lead",
    //             tribe: "Rigas",
    //         },
    //         {
    //             id: 3,
    //             name: "Sirli",
    //             title: "Intern",
    //             tribe: "Internstellar",
    //         },
    //     ],
    // );


    // function addEmployee() {
    //     setEmployees((previousEmployeeList) => [...previousEmployeeList, {
    //         id: Math.floor(Math.random() * 101),
    //         name: formData.?name,
    //         title: formData.?title,
    //         tribe: formData.?tribe,

    //     }]);
    // }
    
    function deleteEmployee(idToBeDeleted) {
        setEmployees((previousEmployeeList) => previousEmployeeList.filter((employee) => employee.id != idToBeDeleted));
    }

    // keep on listening for changes in employees (or other data items mentioned in array in second argument of useEffect).
    // in case if employees state has been updated, then call the function written in
    // the first argument of useEffect
    useEffect(() => { console.log(employees); }, [employees]);

    return (
        <div className="col-xs-6">
            {
                employees.map((employee) => <EmployeesItem key={employee.id} employee={employee} handleDeletion={deleteEmployee} /> )
            }
         </div>
    )
}


export default  EmployeesCard