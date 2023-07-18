import React from 'react'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className='w-screen mx-auto px-4 lg:w-[80vw] text-center'>{children}</div>
}

export default Wrapper
