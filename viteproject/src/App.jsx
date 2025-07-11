import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
          <div className='top'>
            <div className='profile'> 
              <img className='photo' src="" alt="" />
              <span >username</span>
            </div>
          </div>

          <div className='imagine'></div>


          <div className="action">
            <button className="like ">like</button>
            <button className="comment">comment</button>
            <button className="share">share</button>
          </div>
        
          <div className='prescription'>
            <span>nfjas fmsfa</span>
          </div>
      </div>
    </>
  )
}

export default App
   