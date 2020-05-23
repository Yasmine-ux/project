import React from 'react'
import Navmenu from '../Navbar/navbar'
import SearchCard from '../SearchCard/Search'
import SerCard from '../SerCards/SerCard'
import '../SerCards/style.css'
import Footer from '../footer/footer'

const SearImg =[{src:'https://www.unasurcds.org/wp-content/uploads/2017/03/tg2wed7c6ywed7u22.jpg'}]
const Card = [{title:'Plumber', desc:'Herver Boudoin'}]
const Card2 = [{title:'Painter', desc:'Christopher Charrier'}]
export default function PlumServices() {
    return (
        <div>
            <SearchCard search={SearImg}/>
            <h4 className='Titre-service'>Plumbing and Painting Services</h4>
            <div className='cartes'>
            <SerCard card={Card}/>
            <SerCard card={Card2}/>
            </div>
        </div>
    )
}
