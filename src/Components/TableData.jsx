import React from 'react'



const TableData = ({data,handleDelet}) => {
    
    return (
        <>
            <tr>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.name}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.age}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.address}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.deparment}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.salary}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'>{data.meritalStatus}</td>
                <td className='border-2 border-gray-600 dark:border-gray-400 text-2xl p-2'><button  className="bg-red-700 px-4 py-1 rounded-md text-white hover:bg-red-800 " onClick={()=>handleDelet(data.salary)} >Delete</button></td>
            </tr>
        </>
    )
}

export default TableData