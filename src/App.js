import { useState } from 'react';
import './App.css';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  const [isDark, setDark] = useState(true)

  const handleIsDark = () => {

    alert(isDark)
    const body = window.document.documentElement;

    setDark(!isDark);
    // props.isDarkMode();
    body.classList.add((isDark) ? "dark" : "light");

    (!isDark) ? body.classList.remove("dark") : body.classList.remove("light")

  }
  return (
    <div className="App ">
      <header className="App-header bg-slate-100 dark:bg-slate-800 ">
        <button className='text-white bg-black w-20 float-right ml-4 rounded-lg dark:text-white dark:bg-gray-600 mt-3 fixed'>dark</button>
        <h3 className=' text-center w-full mt-6 text-5xl dark:text-white text-slate-900 fixed' onClick={handleIsDark}>Employee Details without using API</h3>
        <EmployeeDetails />
      </header>
    </div>
  );
}

export default App;
