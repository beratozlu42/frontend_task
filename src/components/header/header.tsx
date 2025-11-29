import React from 'react'
import Nav from './Nav'

const header = () => {
  return (
    <header className="bg-white background sticky top-0 flex-wrap z-[20] mx-auto flex max-w-[80rem] items-center justify-between p-5">
      <a href="/"><h1 className="font-bold text-4xl text-[#470808] bg-red-200 p-2 rounded-2xl">Logo</h1></a>
      <Nav />
    </header> /* Fix the wrapping links issue */
  )
}

export default header