import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import logo from './pages/logo.svg'
import profile from '../images/profile.jpg'
import pic1 from '../images/logo.png'
import pic2 from '../images/logo2.png'
import background from '../images/background.jpeg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={logo}
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Adventure'
                            path='/projects'
                        />
                        <CardItem
                            src={profile}
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Luxury'
                            path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={pic1}
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Adventure'
                            path='/projects'
                        />
                        <CardItem
                            src={pic2}
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Luxury'
                            path='/projects'
                        />
                        <CardItem
                            src={background}
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Luxury'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
