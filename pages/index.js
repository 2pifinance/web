import React from 'react'
import Meta from '../src/components/meta'
import MainSection from '../src/components/sections/main'
import DevsSection from '../src/components/sections/devs'
import FooterSection from '../src/components/sections/footer'

const Home = () => (
  <React.Fragment>
    <Meta />
    <MainSection />
    <DevsSection />
    <FooterSection />
  </React.Fragment>
)

export default Home
