import React from 'react'

const layout = ({children,wishlist,history}:{children:React.ReactNode,wishlist:React.ReactNode,history:React.ReactNode}) => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center">
        {children}
        {wishlist}
         {history}
    </div>
  )
}

export default layout