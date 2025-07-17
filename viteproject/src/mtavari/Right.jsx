import { useState } from 'react'
import './right.css'

function Right() {
  return (
    <>
      <div className='container1'>
        <div className='main'>
    
        
          <div className="main1">
            <p><b>locations</b></p>
            <div className="locations-list" style={{maxHeight: '180px', overflowY: 'auto'}}>
              <div className='top2'>
                <div className='profile2'> 
                  <img className='photo2' src="" alt="" />
                  <span >username</span> {/*.props.username*/}
                  <div className='loc'>Tbilisi</div> {/*.props.location*/}
                </div>
              </div>
              
              <div className='top2'>
                <div className='profile2'> 
                  <img className='photo2' src="" alt="" />
                  <span >username</span>
                  <div className='loc'>Poti</div>
                </div>
              </div>
              
              
              {/* Add more top2 divs here as needed */}
            </div>
          </div>



          <div className="main2">
            <p><b>inbox</b></p>
            <div className="inbox-content" style={{maxHeight: '180px', overflowY: 'auto'}}>
              
              <div className='message'>
                <img className='photo2' src="" alt="" />
                <div className='message-content'>
                  <span className='message-username'>username</span> {/*props.username*/}
                  <span className='message-text'>Hello! How are you?</span> {/*.props.message*/}
                  <span className='message-time'>10:30 AM</span>
                </div>
              </div>

              <div className='message'>
                <img className='photo2' src="" alt="" />
                <div className='message-content'>
                  <span className='message-username'>anotheruser</span>
                  <span className='message-text'>I'm fine, thanks!</span>
                  <span className='message-time'>10:32 AM</span>
                </div>
              </div>
              
              
              {/* Add more message divs here as needed */}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Right