import React from 'react'
import { HeroCdss } from '../../Components/Services/CDSS/HeroCdss'
import { FeaturedCdss } from '../../Components/Services/CDSS/FeaturedCdss'


export function CDSS() {
    

    return (
        <React.Fragment>
            <div>
          <div><HeroCdss/></div>
          <div><FeaturedCdss/></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
            </div>
        </React.Fragment>
    )
}
