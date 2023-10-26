import React from 'react'
import Navbar from '../Navigation/Navbar'
import RightSideSection from '../Home/InnerSections/RightSideSection'
import LeftSideSection from '../Home/InnerSections/LeftSideSection'
import MiddleSideSection from '../Home/InnerSections/MiddleSideSection'

function PhotosSection() {
    return (
        <div>
            <Navbar />
            <div className='px-10 flex pt-5'>
                {/* Left Side Section */}
                <LeftSideSection />
                {/* Middle Section */}
                <MiddleSideSection />
                {/* Right Side Section */}
                <RightSideSection />
            </div>
            Photos
        </div>
    )
}

export default PhotosSection
