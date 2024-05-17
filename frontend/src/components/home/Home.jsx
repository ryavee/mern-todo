import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-items-center flex-column'> 
        <h1 className='text-center'>Seize every moment,<br />  master every task.</h1>
        <p>Empower your productivity. Sign up now and <br />make every task your own with ToDo List.</p>
        <button className='home-btn'>
               <Link
                  className="nav-link active btn-nav"
                  aria-current="page" 
                  to="/signup"
                 >
                   make todo list
                 </Link>
          </button>
        </div>
        </div>
       
)
}

export default Home;