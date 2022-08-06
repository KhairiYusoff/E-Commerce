import React from 'react'
import Annoucements from '../components/Annoucements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            <Annoucements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home