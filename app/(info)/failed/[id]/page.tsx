"use client"
import { useToast } from '@/components/ui/use-toast'
import React,{useEffect} from 'react'

const Page = ({params}:{params:{ id: string }}) => {
  const { toast } = useToast()
  useEffect(()=>{
    const updateData = async ()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/failed/${params.id}/api`)
      if(!res.ok) {
        toast({
          title: 'Error',
          description: 'Something went wrong',
          variant: 'destructive',
          duration:5000
        })
        return

      }
      const data = await res.json()
      console.log(data)
      return data
    }
    updateData()

  },[params.id, toast])
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-orange-500">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-red-500 text-white rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Failed</h1>
      <p className="text-gray-600 mb-6">
        Unfortunately, your payment could not be processed. Please try again or contact support.
      </p>
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
        onClick={() => window.location.href = '/'}
      >
        Home
      </button>
    </div>
  </div>
  )
}

export default Page