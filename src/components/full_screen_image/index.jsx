import React from 'react'

import "./style.css";

const FullScreenImage = ({name, content}) => {
  return (
    <div className='fullimage'>
        <h1>{name}</h1>
        <p>
       {content}
        </p>
        <button className='red-btn'>Visit Us To Know More</button>
    </div>
  )
}

export default FullScreenImage