import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Clients from './Clients'
import Gallery from './Gallery'
import NewsLetter from './NewsLetter'

const Home = () => {
    return (
        <main>
            <Hero />
            <Clients />
            <Categories />
            <Gallery />
            <NewsLetter />
        </main>
    )
}

export default Home