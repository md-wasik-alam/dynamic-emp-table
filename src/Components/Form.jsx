import React from 'react'
import { useState } from 'react'

const Form = ({ setEmployeeData, employeeData }) => {
    const [text, setText] = useState({
        name: "",
        age: "",
        address: "",
        deparment: "",
        salary: "",
        meritalStatus: false
    })

    const handelForm = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked !== false ? "Married" : "Unmarried" : value;
        setText({ ...text, [name]: newValue })
    }

    const handelSubmitEmployeeDetails = (e) => {
        e.preventDefault();
        setEmployeeData([...employeeData, text])
        setText({
            name: "",
            age: "",
            address: "",
            deparment: "",
            salary: "",
            meritalStatus: false
        })
    }
    return (
        <div className='Employee-form w-1/3  flex fixed mt-20  '>
            <form className=' shadow-xl bg-slate-200 dark:bg-slate-900 rounded-md border-2 border-gray-500 p-6 text-gray-900 dark:text-white' onSubmit={handelSubmitEmployeeDetails}>
                <div className="mb-4">
                    <label>Name</label><br />
                    <input type="text"
                        placeholder='Enter Employee Name'
                        className=' py-1 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        name='name' value={text.name}
                        onChange={handelForm} />

                </div>

                <div className="mb-4">

                    <label>Age</label><br />
                    <input type="text"
                        className=' py-1 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Enter Employee Age' name='age' value={text.age} onChange={handelForm} />
                </div>
                <div className="mb-4">

                    <label>Address</label><br />
                    <input type="text" placeholder='Enter Employee Address' name='address' value={text.address} onChange={handelForm}
                        className='py-1 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="mb-4">

                    <label>Department</label><br />
                    <select name="deparment" className=' py-1 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={text.deparment} onChange={handelForm}>
                        <option value="">Select Deparment</option>
                        <option value="Sales">Sales</option>
                        <option value="Managment">Managment</option>
                        <option value="Electrical">Electrical</option>
                        <option value="HR">HR</option>
                    </select>
                </div>
                <div className="mb-2">

                    <label>Salary</label><br />
                    <input type="text" placeholder='Enter Employee Salary' name='salary' value={text.salary} onChange={handelForm} className=' py-1 shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' /> <br />
                </div>

                <div className="mb-2">

                    <input type="checkbox" className=' h-4 w-4' name="meritalStatus" checked={text.meritalStatus} onChange={handelForm} />
                    <label>&nbsp; Merital Status</label>
                </div>

                <div className="mb-2 w-full ">

                    <input className='py-1 w-full py-2 rounded-lg text-gray-100 bg-green-800 hover:bg-green-900' type="submit" value="Add Employee" />
                </div>

            </form>
        </div>
    )
}

export default Form