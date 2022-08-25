import './App.css';
import React ,{ useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {FiSettings } from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';


function App() {
  const activeMenu = false;
  return (
    <div>
      <Router>
        <div className = "flex relative dark:bg-main-dark-bg">
          <div className = "fixed right-4 bottom-4" style={{ zIndex : '1000'}}>
            <TooltipComponent content="Settings" target="settings" position="Top">
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              sidebar
            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              sidebar
            </div>
          )
          }
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'
          }>
             <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              navbar
              </div>
            </div>
            <div>
              <Routes>
                <Route path= "/" element= "Ecommerce" />
                <Route path= "/ecommerce" element= "Ecommerce" />
                <Route path= "/orders" element= "Orders" />
                <Route path= "/employees" element= "Employees" />
                <Route path= "/customers" element= "Customers" />
                <Route path= "/kanbar" element= "Kanbar" />
                <Route path= "/editor" element= "Editor" />
                <Route path= "/calendar" element= "Calendar" />
                <Route path= "/line" element= "Line" />
                <Route path= "/area" element= "Area" />
                <Route path= "/bar" element= "Bar" />
                <Route path= "/pie" element= "Pie" />
                <Route path= "/pie" element= "Pie" />
              </Routes>
            </div>
          </div>
      </Router>
    </div>
  );
}

export default App;
