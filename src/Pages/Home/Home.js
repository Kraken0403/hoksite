import React from 'react'
import Homehero from '../../Components/Homehero'
import Header from '../../Components/Header'
import SmallWrapper from '../../Components/SmallWrapper'
import ProjectGallery from '../../Components/ProjectGallery'
import DraggableItems from '../../Components/DraggableItems'
import Footer from '../../Components/Footer'

function Home() {
    return (
        <div>
            <Header color="#fff"/>
            <Homehero/>
            <SmallWrapper/>
            <ProjectGallery/>
            <DraggableItems/>
            <Footer/>
        </div>
    )
}

export default Home
