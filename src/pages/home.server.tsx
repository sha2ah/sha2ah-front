import { useTranslate } from '@pankod/refine-core'
import { Navbar, Footer, Banner } from '../components/layout/'
import {
  Hero,
  About,
  Services,
  Team,
  FAQ,
  Pricing,
  Contact,
} from '../sections/home/'

import { useAuth0 } from '@auth0/auth0-react'

export const Home: React.FC = () => {
  const t = useTranslate()

  return (
    <>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Services />
        <Banner />
        {/* <Team /> */}
        <FAQ />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
