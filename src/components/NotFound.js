import React from 'react'
import { Link } from 'react-router-dom'
import notFound from "../assets/images/404.png"

function NotFound() {
  return (
    <div className="flex h-screen bg-violet-900">
      <div className="m-auto">
        <div className="space-y-5">
          <img src={notFound} className="mx-auto rounded-full w-1/2" alt="" />
          <p className="text-center font-lansdowne text-3xl text-white mt-4"><span className="text-gray-900">Sorry..</span> this page is currently on progress</p>
          <Link to="/" className="flex justify-center space-x-5 items-center text-white hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <p className='font-lansdowne text-3xl'>Back</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound