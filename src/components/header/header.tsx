import React from 'react'
import Nav from './Nav'

const header = () => {
  return (
    <header className="bg-white background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between p-5">
        <a href="/"><h1 className="font-bold text-4xl">Header</h1></a>
        <Nav />
    </header>
  )
}

export default header