import React from 'react'
import Card from '../components/card'
import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'
import AppBar from '../components/appBar'

const IndexPage = () => {

  return (
    <main>
      <Helmet>
        <link rel='icon' href={favicon} />
        <title>Couteau Thomas</title>
      </Helmet>
      <AppBar />
      <Card />
    </main>
  )
}

export default IndexPage