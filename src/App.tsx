/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Header, SocialLink } from './components/'
import { SOCIALS } from './constants'

import './index.css'

export function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="h-dvh overflow-hidden">
      <div
        className={`${darkMode ? 'bg-gradient-to-br from-primary-200 from-10% via-primary-100 via-30% to-primary-100 to-90% transition-colors duration-200 dark' : 'bg-gradient-to-br from-primary-300 from-10% via-primary-400 via-30% to-primary-400 to-90% transition-colors duration-200'}`}
      >
        <div className="backdrop-blur-sm mt-0 m-auto max-w-5xl w-full flex h-screen">
          <main className="dark:text-white text-primary-100 w-full h-full mx-3 flex flex-col justify-center items-center gap-9 z-10 p-7">
            <Header />
            <label className="relative inline-flex items-center cursor-pointer ">
              <input className="sr-only peer" value="" type="checkbox" />
              <div
                onClick={toggleDarkMode}
                className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-300 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-primary-100 after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-300 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0 animate-rightLeft"
              ></div>
            </label>
            <ul className="flex flex-col flex-wrap w-full gap-10">
              {SOCIALS.map((social, index) => {
                return <SocialLink key={index} {...social} />
              })}
            </ul>
            <footer className="animate-bottomUp w-auto">
              <p className="font-Nunito">
                Feito com muita dedicação por Áxel {darkMode ? '💙' : '❤'}
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
