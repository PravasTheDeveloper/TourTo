import React, { useEffect, useState } from 'react'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import VideoSection from './components/videos/VideoSection'
import EventSection from './components/events/EventSection'
import GroupSection from './components/group/GroupSection'
import PhotosSection from './components/photos/PhotosSection'
import LeftSideSection from './components/Home/InnerSections/LeftSideSection'
import SignUp from './components/SignUp/SignUp'
import LoginForm from './components/Login/LoginForm'
import BarLoader from "react-spinners/BarLoader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full bg-white flex flex-col items-center justify-center h-screen">
          <img src="/SVGS/mainLogo.svg" className='w-[200px] mb-10' alt="" />
          <BarLoader
            loading
            sizeUnit="px"
            width={100}
            height={3}
            color="#0096f2"
          />
        </div>
      ) : (

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideoSection />} />
          <Route path="/photos" element={<PhotosSection />} />
          <Route path="/group" element={<GroupSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      )}
    </>
  )
}

export default App