import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Clients from './Clients'
import Gallery from './Gallery'
import Contact from '../Contact'

const Home = () => {
    return (
        <main>
            <Hero />
            <Clients />
            <Categories />
            <Gallery />
        </main>
    )
}

export default Home