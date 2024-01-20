import React, { useState } from 'react'
import { AdminDashHeader } from '../Dashboard/AdminDashHeader'
import { AdminDashboard } from '../AdminSidebar'
import axios  from 'axios'

export const SearchBooks = () => {

    const [form, setForm] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        console.log("submitted")

        console.log(form)

        const formData = new FormData()
        formData.append('file', form)

        axios.post('http://localhost:8080/profile', formData)
    
        console.log(formData)
      }
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
                    <h1 className=''>Students</h1>
                    <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Edit Student </span> 
                </div>

                <div>
                    
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="file" name="file" onChange={(e)=> setForm(e.target.files[0])} ></input>
                    <button type='submit'>submit</button>
                </form>

                </div>

            </div>
        </div>
    </div>
  )
}
