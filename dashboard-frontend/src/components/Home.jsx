import React from 'react'
import Header from './Header'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-black to-[rgb(36,37,73)]' >
        <Header />
        <Dashboard />
    </div>
  )
}
