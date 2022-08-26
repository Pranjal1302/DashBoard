import './App.css';
import React ,{ useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {FiSettings } from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Navbar,Footer,Sidebar,ThemeSettings} from './components';
import {Ecommerce,Orders,Employees,Customer,Editor,Calendar,Line,Area,Bar,Pie,Colorpicker,Stacked,Kanban} from './pages';


function App() {
  const activeMenu = true ;
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
              <Sidebar />
            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )
          }
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'
          }>
             <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
              </div>
            </div>
            <div>
              <Routes>
                <Route path= "/" element= {<Ecommerce />} />
                <Route path= "/Ecommerce" element= {<Ecommerce />} />
                <Route path= "/Orders" element= {<Orders />} />
                <Route path= "/Employees" element= {<Employees />} />
                <Route path= "/Customer" element= {<Customer />} />
                <Route path= "/Kanban" element= {<Kanban />} />
                <Route path= "/Editor" element= {<Editor />} />
                <Route path= "/Calendar" element= {<Calendar />} />
                <Route path= "/Line" element= {<Line />} />
                <Route path= "/Area" element= {<Area />} />
                <Route path= "/Bar" element= {<Bar />} />
                <Route path= "/Pie" element= {<Pie />} />
              </Routes>
            </div>
          </div>
      </Router>
    </div>
  );
}

export default App;
