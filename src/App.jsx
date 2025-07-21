import React from 'react'
import Header from './components/Header' // adjust the path if Header is in another folder
import CardContent from './components/CardContent'
import Card from './components/Card'
import Industries from './components/Industries'

function App() {
  return (
    <div>
      <Header />
     <CardContent/>
     <Card/>
     <Industries/>
    </div>
  )
}

export default App
