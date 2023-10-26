import React from 'react'

function RightSideProfileSection() {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden '>
                <img src="/profilePage.jpg" alt="" />
            </div>
            <div className='text-center'>
                <div className='text-lg font-semibold text-slate-800'>
                    Mithun Sarkar
                </div>
                <div className='w-[300px] font-medium text-slate-500 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, soluta.
                </div>
            </div>
        </div>
    )
}

export default RightSideProfileSection
