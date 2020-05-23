import React from 'react'
import Navmenu from '../Navbar/navbar'
import SearchCard from '../SearchCard/Search'
import SerCard from '../SerCards/SerCard'
import '../SerCards/style.css'
import Footer from '../footer/footer'

const SearImg =[{src:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=794&q=80'}]
const Card = [{title:'Yoga teacher', desc:'Herver Boudoin'}]
const Card2 = [{title:'Hair-dresser', desc:'Christopher Charrier'}]
export default function HealthBeauty() {
    return (
        <div>
            <SearchCard search={SearImg}/>
            <h4 className='Titre-service'>Health and Beauty Services</h4>
            <div className='cartes'>
            <SerCard card={Card}/>
            <SerCard card={Card2}/>
            </div>
        </div>
    )
}
