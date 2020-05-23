import React from 'react'
import Navmenu from '../Navbar/navbar'
import SearchCard from '../SearchCard/Search'
import SerCard from '../SerCards/SerCard'
import '../SerCards/style.css'
import Footer from '../footer/footer'

const SearImg =[{src:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}]
const Card = [{title:'Housework', desc:'Herver Boudoin'}]
const Card2 = [{title:'School assistant', desc:'Christopher Charrier'}]

export default function HomeHelp() {
    return (
        <div>
            <SearchCard search={SearImg}/>
            <h4 className='Titre-service'>Home Help Services</h4>
            <div className='cartes'>
            <SerCard card={Card}/>
            <SerCard card={Card2}/>
            </div>
        </div>
    )
}
