import React from 'react'
import { HeroCdss } from '../../Components/Services/CDSS/HeroCdss'
import { FeaturedCdss } from '../../Components/Services/CDSS/FeaturedCdss'
import { TestominalCdss } from '../../Components/Services/CDSS/TestominalCdss'
import { BookDemo } from '../../Components/Services/BookDemo'
import { CTACdss } from '../../Components/Services/CDSS/CTACdss'
import { ClientLogoCdss } from '../../Components/Services/CDSS/ClientLogoCdss'


export function CDSS() {
    

    return (
        <React.Fragment>
            <div>
          <div><HeroCdss/></div>
          <div><FeaturedCdss/></div>
          <div><TestominalCdss/></div>
          <div><CTACdss/></div>
          <div><ClientLogoCdss/></div>
          <div><BookDemo/></div>
            </div>
        </React.Fragment>
    )
}
