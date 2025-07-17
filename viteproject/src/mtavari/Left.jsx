import { useState } from 'react'
import './left.css'


function Left(){
    return (
        <>
        <div className='container2'>
            <div className="maini">

            <div className='top1'>
                <div className='profile1'> 
                  <img className='photo1' src="" alt=""  /> {/*.props.imagine*/}
                  <span >Profile</span>
                </div>
            </div>

            <div className='top1'>
                <div className='profile1'> 
                  <img className='photo1' src="" alt="icon" />
                  <span>Security Control</span>
                </div>
            </div>

            <div className='top1'>
                <div className='profile1'> 
                  <img className='photo1' src="" alt="icon" />
                  <span>Activity</span>
                </div>
            </div>
            
            <div className='top1'>
                <div className='profile1'> 
                  <img className='photo1' src="" alt="icon" />
                  <span>Make Post</span>
                </div>
            </div>

            </div>
        </div>
        </>
    )
}
export default Left