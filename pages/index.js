import React from 'react'
import Meta from '../src/components/meta'
import Modal from '../src/components/modal'
import MainSection from '../src/components/sections/main'
import DevsSection from '../src/components/sections/devs'
import FooterSection from '../src/components/sections/footer'

const Home = () => (
  <React.Fragment>
    <Meta />
    <MainSection />
    <DevsSection />
    <FooterSection />
    <Modal />
  </React.Fragment>
)

export default Home
