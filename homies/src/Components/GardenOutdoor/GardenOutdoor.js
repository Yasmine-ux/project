import React from 'react'
import Navmenu from '../Navbar/navbar'
import SearchCard from '../SearchCard/Search'
import SerCard from '../SerCards/SerCard'
import '../SerCards/style.css'
import Footer from '../footer/footer'

const SearImg =[{src:'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}]
const Card = [{title:'Gardener', desc:'Herver Boudoin'}]
const Card2 = [{title:'Gardener', desc:'Christopher Charrier'}]

export default function GardenOutdoor() {
    return (
        <div>
            <SearchCard search={SearImg}/>
            <h4 className='Titre-service'>Garden and Outdoor Services</h4>
            <div className='cartes'>
            <SerCard card={Card}/>
            <SerCard card={Card2}/>
            </div>
        </div>
    )
}
