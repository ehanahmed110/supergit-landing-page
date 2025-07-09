import React from 'react'
import { HeroAbout } from '../Components/About/HeroAbout'
import { CardsAbout } from '../Components/About/CardsAbout'

export function AboutUsPage() {
    

    return (
        <React.Fragment>
             <div className=''>
               <HeroAbout />
               <CardsAbout />
             </div>
        </React.Fragment>
    )
}
