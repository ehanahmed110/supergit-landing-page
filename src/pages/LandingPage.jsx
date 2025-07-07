import React from 'react'
import { NavBar } from '../Shared/NavBar'
import { HeroSection } from '../Components/HeroSection'
import { AboutSection } from '../Components/AboutSection'
import { ModulesSection } from '../Components/ModulesSection'
import { HowWorksSection } from '../Components/HowWorksSection'
import { DemoSection } from '../Components/DemoSection'
import { WhyChooseSection } from '../Components/WhyChooseSection'
import { ContactSection } from '../Components/ContactSection'

export function LandingPage() {
    

    return (
        <React.Fragment>
            <div>
                <NavBar />
            </div>
            <div>
                <section id='hero'>
                <HeroSection  />
                </section>
            </div>
            <div>
                <section id='about'>
                    <AboutSection />
                </section>
            </div>
            <div>
                <section id='modules'>
                    <ModulesSection />
                </section>
            </div>
            <div>
                <section id='how'>
                    <HowWorksSection />
                </section>
            </div>
            <div>
                <section id='demo'>
                    <DemoSection />
                </section>
            </div>
            <div>
                <section id='why'>
                    <WhyChooseSection />
                </section>
            </div>
            <div>
                <section id='contact'>
                    <ContactSection />
                </section>
            </div>
        </React.Fragment>
    )
}
