import React from 'react'
import ProfilePicture from '../../global/ProfilePicture'

function StatusUploadSection() {
  return (
    <div className='w-full h-auto bg-white mt-5 rounded-lg overflow-hidden shadow-md'>
        <div className='w-full h-[60px] pt-3 pl-5 text-xl text-slate-500'>
            Let's Post Something
        </div>
        <div className='w-full h-[60px]  flex items-center px-3'>
            <div className='w-[50px] h-[50px]  rounded-full overflow-hidden'>
                <ProfilePicture />
            </div>
            <div className='flex-1  h-full flex items-center px-5'>
                <input type="text" className='w-full h-[50px] rounded-xl px-2 outline-c-blue border-slate-300 border' placeholder='Write here what you have in your mind' />
            </div>
        </div>
    </div>
  )
}

export default StatusUploadSection
