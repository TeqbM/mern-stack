import React, { forwardRef } from 'react'

const Input = forwardRef( function Input({
     lable,
     type="text",
     ...props
}, ref){
     return(
          <div className='mt-3'>
               <input type={type} ref={ref} {...props}  className=''/> 
          </div>
     )
});

export default  Input

