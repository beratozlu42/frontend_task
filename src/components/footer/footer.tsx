import React from 'react'

const footer = () => {
  return (
    <footer className="bg-red-100 mt-10 p-10">
      <div className="container mx-auto flex justify-center align-center">
        <div className="w-[100%] mx-auto md:w-1/2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Logo</h1>
          <span className="text-md text-gray-500">© 2025 Company Name. All rights reserved.</span>
          <p className="text-md text-gray-500">Built with <span className="text-red-400">React</span> and <span className="text-red-400">TailwindCSS</span></p>
        </div>
      </div>
    </footer>
  )
}

export default footer