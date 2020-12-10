import React from 'react'
import MainFeed from '../components/layout/MainFeed.jsx'
import SideNav from '../components/layout/SideNav.jsx'
//import TwitterModal from '../components/common/TwitterModal.jsx'
import { Container } from './Home.js'

const Home = () => {
  return (
    <Container>
      {/* <TwitterModal
        title='Log out of Twitter?'
        text='You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.'
      /> */}
      <SideNav />
      <MainFeed />
    </Container>
  )
}

export default Home
