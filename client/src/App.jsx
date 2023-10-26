import React from 'react'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import VideoSection from './components/videos/VideoSection'
import EventSection from './components/events/EventSection'
import GroupSection from './components/group/GroupSection'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoSection />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/group" element={<GroupSection />} />
      </Routes>
    </>
  )
}

export default App