import React from 'react'
import MainFeed from '../components/layout/MainFeed.jsx'
import SideNav from '../components/layout/SideNav.jsx'
import { Container } from './Home.js'

const Home = () => {
  return (
    <Container>
      <SideNav />
      <MainFeed />
    </Container>
  )
}

export default Home
