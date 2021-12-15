import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import '../images/logo.png'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='./pages/logo.svg'
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Adventure'
                            path='/projects'
                        />
                        <CardItem
                            src='./pages/logo.svg'
                            text='My Name is Jacob and Welcome to my portfolio site!'
                            label='Adventure'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
