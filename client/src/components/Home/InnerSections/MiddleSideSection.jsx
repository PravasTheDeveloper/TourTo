import React from 'react'
import Swipper from './Swipper'
import StatusUploadSection from './StatusUploadSection'
import PostShowSection from './PostShowSection'

function MiddleSideSection() {
  return (
    <div className='w-[680px] h-screen'>
      <Swipper />
      <StatusUploadSection />
      <PostShowSection />
      <PostShowSection />
      <PostShowSection />
    </div>
  )
}

export default MiddleSideSection
