import React, { useState }  from 'react';
import EmployeesItem from './employees-item/index.jsx';

export default function EmployeesCard() {
    const [employees, setEmployees] = useState(
        [
            {
                id: 1,
                name: "Zohaib",
                title: "FullStack Dev",
                tribe: "Rigas",
            },
            {
                id: 2,
                name: "Mykhailo",
                title: "Eng.Learn&Dev Lead",
                tribe: "Rigas",
            },
            {
                id: 3,
                name: "Sirli",
                title: "Intern",
                tribe: "Internstellar",
            },
        ],
    );

    return (
        <div className="col-xs-6">
            {
                employees.map((employee) => <EmployeesItem key={employee.id} employee={employee} /> )
            }
         </div>
    )
}

