import React from 'react'
import SearchBar from '../searchBar/searchBar'
import ServicesSection from '../ServicesSection/ServicesSection'
import SecondarySection from '../SecondarySection/SecondarySection'
import ThirdSection from '../ThirdSaction/ThirdSection'
import Footer from '../footer/footer'


export default function HomePage() {
    return (
        <div>
            <SearchBar/>
            <ServicesSection/>
            <SecondarySection/>
            <ThirdSection/>
        </div>
    )
}
