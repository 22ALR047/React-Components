import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Search from './Components/search'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <Search />
      <main className="flex flex-col items-start justify-start flex-1 p-0">
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default App
