import React from 'react'
import { HeroErp } from '../../Components/Services/ERP/HeroErp'
import { FeaturedErp } from '../../Components/Services/ERP/FeaturedErp'
import { CTAErp } from '../../Components/Services/ERP/CTAErp'


export function ERP() {
    

    return (
        <React.Fragment>
            <div className='w-full'>
                <div><HeroErp/></div>
                <div><FeaturedErp/></div>
                <div><CTAErp/></div>
            </div>
        </React.Fragment>
    )
}
