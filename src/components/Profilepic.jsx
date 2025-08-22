import React from 'react'

export default function Profilepic({ props }) {
    return (
        <div className='rounded-full p-[4px] bg-gradient-to-r from-green-400 to-green-600'>
            <img src='/muthu.jpg' alt='Profile Pic'
                className={`${props} object-cover rounded-full`}
            ></img>
        </div>
    )
}
