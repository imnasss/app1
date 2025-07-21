import { useState } from 'react'
import { checkLogin, getAllUsers } from '../hooks/useDocs'; 
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './left.css'
import { useNavigate } from 'react-router-dom';

function Left(){

    const [usersList, setUsersList] = useState([]);
  // Fetch registered users on component mount
      useEffect(() => {
        async function fetchUsers() {
          const users = await getAllUsers();
          setUsersList(users);
        }
        fetchUsers();
      }, []);
  
    return (
        <>
        <div className='container2'>


        {/* Left side: List of registered users at the bottom */}
         <div className="left-side">
            <div className="users-list">
              <h3>Registered Users</h3>
              <ul>
                {usersList.map(user => (
                  <li key={user.id}>{user.username}</li>
                ))}
              </ul>
            </div>
          </div>



        <div className="maini">

          <div className='top1'>
            <div className='profile1'> 
              <svg className='photo1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8 8 0 1116.88 6.195 8 8 0 015.121 17.804z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><p className="gadasvla">Profile</p></span>
            </div>
          </div>

          <div className='top1'>
            <div className='profile1'> 
              <svg className='photo1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="10" x="5" y="8" rx="2" ry="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4" />
              </svg>
              <span><p className="gadasvla">Security Control</p></span>
            </div>
          </div>

          <div className='top1'>
            <div className='profile1'> 
              <svg className='photo1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span><p className="gadasvla">Activity</p></span>
            </div>
          </div>

          <div className='top1'>
            <div className='profile1'> 
              <svg className='photo1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5h7M4 12h7m-7 7h7" />
              </svg>
                <span ><Link to='/Create' className="gadasvla">Create Post</Link></span>
            </div>
          </div>

        </div>
      </div>

        </>
    )
}
export default Left