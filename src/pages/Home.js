import React from 'react'
import Annoucements from '../components/Annoucements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'





const Home = () => {
    return (
        <div>
            <Annoucements />
            <Navbar />
            <Slider />
            <Categories />


        </div>
    )
}

export default Home