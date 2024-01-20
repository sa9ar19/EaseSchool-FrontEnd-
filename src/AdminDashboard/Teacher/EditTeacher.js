import React from 'react'
import { AdminDashHeader } from '../Dashboard/AdminDashHeader'
import { AdminDashboard } from '../AdminSidebar'

export const EditTeacher = () => {
  return (
    <div>
        <div className='flex w-full justify-start gap-2'>
            <div className=''>
                <AdminDashboard/>
            </div>

            <div className="flex flex-col gap-5  w-full">
                <div>
                    <AdminDashHeader/>
                </div>

                <div className="path-info p-2 h-24 text-xl font-medium">
                    <h1 className=''>Teacher</h1>
                    <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Edit Teacher </span> 
                </div>

                <div>
                    {/* //New code here */}

                </div>

            </div>
        </div>
    </div>
  )
}
