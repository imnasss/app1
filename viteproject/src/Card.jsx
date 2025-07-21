import { useState } from 'react'
import './card.css'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { checkLogin, getAllUsers } from './hooks/useDocs'; 
import React, { useEffect } from 'react';



function Card() {
  const [username, setUsername] = useState('');
  
    const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);


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
      <div className='container'>
          <div className='top'>
            <div className='profile'> 
              <img className='photo' src="" alt="" />
              <span>{username}</span> {/*.props.username*/}
            </div>
          </div>

          <div className='imagine'></div>

          <div className="action">
            <button aria-label="Like">
              <svg viewBox="0 0 24 24" stroke="#262626" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.72-7.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button aria-label="Comment">
              <svg viewBox="0 0 24 24" stroke="#262626" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <button aria-label="Share">
              <svg viewBox="0 0 24 24" stroke="#262626" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>


          <div className="prescription">
        <span>
          <strong>{username}</strong>  {/*.props.prescription*/} This is an example caption text that is easy to read because it’s inside a light gray box with some padding and rounded corners.
        </span>
      </div>
      </div>
    </>
  )
}

export default Card