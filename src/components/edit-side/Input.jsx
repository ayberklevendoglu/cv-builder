import React from 'react'

// eslint-disable-next-line react/prop-types
const Input = ({header,inputType}) => {
  return (
    <div>
      <h3 className='text-lg'>{header}</h3>
      <input type={inputType} className='rounded-md border-2 w-full' />
    </div>
  )
}


export default Input
