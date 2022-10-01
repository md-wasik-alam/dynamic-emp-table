import React, { useEffect, useState } from 'react'
import Button from './Button'
// import "./Employee.css"
import Form from './Form'
import TableData from './TableData'

const EmployeeData = JSON.parse(localStorage.getItem("EmployeeDtaa")) || []


const EmployeeDetails = () => {
    const [employeeData, setEmployeeData] = useState(EmployeeData)
    const [t, setT] = useState("")
    const [temp, setTemp] = useState(employeeData)
  

    useEffect(() => {
        localStorage.setItem("EmployeeDtaa", JSON.stringify(employeeData))
        setTemp(employeeData)
    }, [employeeData])

    const handelSearchData = (d) => {
       
        if (d !== "") {
            setTemp(employeeData.filter((item) => {
              if (d === "") {
                return item;
              }
              else if(item.salary.toLowerCase().includes(d.toLowerCase())){
                return item;
              }
            }));
           
          }
          else {
            setTemp(employeeData);
          }
    }
   
   
    const handleDelete=(id)=>{
        
        setEmployeeData(temp.filter((data)=>(data.salary!==id)))
        
    }

    return (
        <div className='Container flex space-x-6 p-3'>
            <Form setEmployeeData={setEmployeeData} employeeData={employeeData} />
            <div className='Table  mt-12 text-black dark:text-gray-200 pl-96'>
                <Button className="" employeeData={employeeData} handelSearchDat={(d) => handelSearchData(d)} setT={setT} setEmployeeData={setEmployeeData} />
                <table className='tablet border-2 rounded-xl text-center mt-28 '>
                    <thead>
                        <tr>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Name</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Age</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Address</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Deparment</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Salary</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Employee Martial Status</th>
                            <th className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>Remove Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         temp.map((user, index) => (
                                <TableData key={index} data={user} handleDelet={(id)=>handleDelete(id)} />
                            ))
                            
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeDetails