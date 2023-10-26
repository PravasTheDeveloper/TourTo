import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'
import { PiShareFatLight } from 'react-icons/pi'

function PostShowSection() {
    return (
        <>
            <div className='w-full h-auto bg-white mt-5 shadow-md rounded-xl p-7'>
                <div className='w-full h-full'>
                    <div className='w-full h-12 flex'>
                        <div className='w-12 h-full bg-slate-900 rounded-full overflow-hidden'>
                            <img src="/profilePage.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-center ml-5'>
                            <div className='w-auto font-semibold'>
                                Mithun Sarkar
                            </div>
                            <div className='text-[12px] text-slate-500'>
                                10 minite ago
                            </div>
                        </div>
                        <div className='flex-1 h-full flex justify-end items-center text-slate-600'>
                            <div className='text-2xl'>
                                <BsThreeDots />
                            </div>
                            <div className='text-2xl ml-5'>
                                <RxCross2 />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 font-medium'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia amet autem blanditiis quia dicta porro saepe natus expedita in quisquam minima iusto sit eligendi quas, provident, voluptas dolorem corrupti.
                    </div>
                    <div className='w-full my-4'>
                        <img src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='w-full h-14 flex py-4'>
                        <div className="w-1/3 h-full border-r border-slate-400 flex justify-center items-center text-2xl">
                            <AiOutlineLike />
                            <div className='text-base font-semibold mt-1'>Like</div>
                        </div>
                        <div className="w-1/3 h-full border-r border-slate-400 flex justify-center items-center text-2xl">
                            <BiCommentDots />
                            <div className='text-base font-semibold mb-1'>Comment</div>
                        </div>
                        <div className="w-1/3 h-full flex justify-center items-center text-2xl">
                        <PiShareFatLight />
                            <div className='text-base font-semibold mb-1'>Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostShowSection
