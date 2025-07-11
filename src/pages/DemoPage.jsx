import React from 'react'
import { HeroDemo } from '../Components/Demo/HeroDemo'
import { CardsDemo } from '../Components/Demo/CardsDemo'

export function DemoPage() {
    

    return (
        <React.Fragment>
           <HeroDemo/>
           <CardsDemo />
        </React.Fragment>
    )
}
