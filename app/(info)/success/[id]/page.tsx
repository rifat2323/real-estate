"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
const Page = ({params}:{params:{ id: string }}) => {
  const { toast } = useToast()
  useEffect(()=>{
    const updateData = async ()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/success/${params.id}/api`)
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-green-500 text-white rounded-full p-4">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your payment. Your transaction has been completed successfully.
      </p>
      <Link href={'/'}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
        onClick={() => window.location.href = '/'}
      >
        Home
      </Link>
    </div>
  </div>
  )
}

export default Page