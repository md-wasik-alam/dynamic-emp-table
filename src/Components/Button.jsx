import { useEffect } from 'react'
import { useState } from 'react'

const Button = ({ employeeData, setEmployeeData,setT,handelSearchDat }) => {
    const [searchData, setSearchData] = useState("")
   
    
  useEffect(()=>{
    handelSearchDat(searchData)
  },[searchData])

    const handelAscending = () => {
        const sortAscendingOrder = employeeData.sort((a, b) => (a.salary - b.salary))
        console.log(sortAscendingOrder);
        setEmployeeData(sortAscendingOrder)
        setT("hello")
    }

    const handelDscending = () => {
        const sortDscendingOrder = employeeData.sort((a, b) => (b.salary - a.salary))
        console.log(sortDscendingOrder);
        setEmployeeData(sortDscendingOrder)
        setT("hii")


    }
    return (

       <div className=" fixed mt-12">
         <div className='Search-Area flex justify-between mr-4  space-x-96'>
            <div>
                <input type="text" className='bg-gray-300 rounded-lg border-2 text-black border-gray-500' placeholder='Search Here' value={searchData} onChange={e => setSearchData(e.target.value)} />
                
            </div>
            <div className='   space-x-9'>
                <button className='ass bg-purple-600 px-3 py-1 hover:bg-purple-700 rounded-xl' onClick={handelAscending}>Ascending</button>
                <button className='dss  bg-purple-600 px-3 py-1 hover:bg-purple-700 rounded-xl' onClick={handelDscending}>Descending</button>
            </div>
        </div>

       </div>
    )
}

export default Button