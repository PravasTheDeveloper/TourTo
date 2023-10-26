import React, { useEffect, useState } from 'react'
import { GoHome, GoHomeFill } from 'react-icons/go';
import { RiVideoFill, RiVideoLine } from 'react-icons/ri';
import { BsCalendar2Event, BsCalendar2EventFill } from 'react-icons/bs';
import { BiGroup, BiSolidGroup } from 'react-icons/bi';
import { IoIosNotificationsOutline, IoIosNotifications } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

    const [activeNavItem, setActiveNavItem] = useState("home");
    const location = useLocation();

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        setActiveNavItem(pathParts[1] || "home");
    }, [location]);

    console.log(location.pathname)


    return (
        <div className='w-full h-[60px] shadow-2xl'>
            <div className='w-full h-full flex px-10'>

                {/* Left Side Section */}

                <div className='flex-1 h-full flex items-center py-2'>
                    <img src='/SVGS/mainLogo.svg' className='h-full' />
                    <div className=''>

                    </div>
                </div>

                {/* Middle Side Section */}

                <div className='w-[680px] h-full flex justify-between'>
                    <div className={`w-1/6 h-full group flex flex-col justify-center items-center`}>
                        <NavLink to="/" className={`h-full w-full flex justify-center items-center text-2xl hover:bg-slate-200 duration-200 cursor-pointer ${location.pathname === "/" ? "border-b-4 border-c-blue" : null}`}>
                            {
                                location.pathname === "/" ? <GoHomeFill className='text-c-blue duration-100' /> : <GoHome />
                            }
                        </NavLink>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100'>
                            Home
                        </div>
                    </div>
                    <div className={`w-1/6 h-full group flex flex-col justify-center items-center`}>
                        <NavLink to="/videos" className={`h-full w-full flex justify-center items-center text-2xl hover:bg-slate-200 duration-100 cursor-pointer ${location.pathname === "/videos" ? "border-b-4 border-c-blue" : null}`}>
                            {
                                location.pathname === "/videos" ? <RiVideoFill className='text-c-blue' /> : <RiVideoLine />
                            }
                        </NavLink>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100'>
                            Video
                        </div>
                    </div>
                    <div className={`w-1/6 h-full group flex flex-col justify-center items-center`}>
                        <NavLink to="/events" className={`h-full w-full flex justify-center items-center text-xl hover:bg-slate-200 duration-100 cursor-pointer ${location.pathname === "/events" ? "border-b-4 border-c-blue" : null}`}>
                            {
                                location.pathname === "/events" ? <BsCalendar2EventFill className='text-c-blue' /> : <BsCalendar2Event />
                            }
                        </NavLink>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100'>
                            Events
                        </div>
                    </div>
                    <div className={`w-1/6 h-full group flex flex-col justify-center items-center`}>
                        <NavLink to="/group" className={`h-full w-full flex justify-center items-center text-2xl hover:bg-slate-200 duration-100 cursor-pointer ${location === "/group" ? "border-b-4 border-c-blue" : null}`}>
                            {
                                location.pathname === "/group" ? <BiSolidGroup className='text-c-blue' /> : < BiGroup />
                            }
                        </NavLink>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100'>
                            Groups
                        </div>
                    </div>
                </div>

                {/* Right Side Section */}

                <div className='flex-1 h-full flex justify-end items-center'>
                    <div className='h-[45px] w-[45px] rounded-full group flex justify-center'>
                        <div className='h-full w-full bg-slate-200 rounded-full flex justify-center items-center text-2xl cursor-pointer hover:bg-slate-300 duration-150'>
                            <IoIosNotifications />
                        </div>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100 text-sm'>
                            Notification
                        </div>
                    </div>
                    <div className='h-[45px] w-[45px] rounded-full ml-2 group cursor-pointer flex justify-end items-center'>
                        <div className='h-full w-full bg-slate-200 rounded-full overflow-hidden'>
                            <img src="/profilePage.jpg" alt="" />
                        </div>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100 text-sm'>
                            Account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar