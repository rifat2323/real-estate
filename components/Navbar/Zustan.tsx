import React from 'react'
import { create } from 'zustand'
type State = {
    isHidden:boolean
}
type Action = {
    setIsHidden:()=>void
}

const Zusatan = create<State & Action>((set)=>({
    isHidden:false,
    setIsHidden:()=>set((state)=>({isHidden:!state.isHidden}))


}))

export default Zusatan