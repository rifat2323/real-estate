import React from 'react'

const layout = ({children,comment}:{children:React.ReactNode,comment:React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit">
        {children}
        {comment}

    </div>
  )
}

export default layout