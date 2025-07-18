import React from 'react'
import { HeroErp } from '../../Components/Services/ERP/HeroErp'
import { FeaturedErp } from '../../Components/Services/ERP/FeaturedErp'
import { CTAErp } from '../../Components/Services/ERP/CTAErp'
import { BookDemo } from '../../Components/Services/BookDemo'
import { TestominalErp } from '../../Components/Services/ERP/TestominalErp'
import { ClientLogoErp } from '../../Components/Services/ERP/ClientLogoErp'



export function ERP() {
    

    return (
        <React.Fragment>
            <div className='w-full'>
                <div><HeroErp/></div>
                <div><FeaturedErp/></div>
                <div><TestominalErp/></div>
                <div ><CTAErp/></div>
                <div><ClientLogoErp/></div>

                <div><BookDemo/></div>
            </div>
        </React.Fragment>
    )
}
