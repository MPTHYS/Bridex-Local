import React from 'react'

function Overlay(props) {
    const {setOpen1} = props
    return (
       
            <div
              className={`overlay`}
              onClick={() => setOpen1('')}
            ></div>
         
    )
}

export default Overlay
