import React from 'react'
import { AdminDashHeader } from '../Dashboard/AdminDashHeader'

export const AllParents = () => {
  return (
            <div className="flex flex-col gap-5  w-full">
                <div>
                    <AdminDashHeader/>
                </div>

                <div className="path-info p-2 h-24 text-xl font-medium">
                    <h1 className=''>Parents</h1>
                    <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> All Parents </span> 
                </div>

                <div>
                    {/* //New code here */}

                </div>

            </div>

  )
}
