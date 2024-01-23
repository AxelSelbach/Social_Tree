import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useState } from 'react'
import photo from './assets/fino_senhores.jpg'

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
            <header className="flex flex-col items-center gap-9">
              <div className="border-2 border-primary-500 dark:border-sky-600 transition-colors duration-200 h-32 w-32 sm:h-40 sm:w-40 rounded-full p-1">
                <img
                  className="rounded-full w-full"
                  src={photo}
                  alt="Foto do meliante que escreveu este código"
                />
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" value="" type="checkbox" />
                <div
                  onClick={toggleDarkMode}
                  className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-300 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-primary-100 after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-300 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                ></div>
              </label>
            </header>

            <ul className="flex flex-col flex-wrap w-full gap-10">
              <li className="w-full h-20 flex flex-wrap items-center justify-center">
                <a
                  className="flex items-center justify-center gap-2 h-auto w-80 sm:w-full p-4 dark:bg-primary-100 bg-white border-solid border-2 border-primary-500 dark:border-sky-600 rounded-2xl hover:shadow-none shadow-wine-shadow dark:shadow-blue-shadow dark:hover:shadow-none hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://www.instagram.com/axel_selbach_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={40} />
                  <p className="dark:hover:text-sky-600 hover:text-primary-500 text-xs sm:text-base font-Nunito font-bold transition-colors duration-200">
                    Explore minha jornada na vida!
                  </p>
                </a>
              </li>

              <li className="w-full h-20 flex flex-wrap items-center justify-center">
                <a
                  className="flex items-center justify-center gap-2 h-auto w-80 sm:w-full p-4 dark:bg-primary-100 bg-white border-solid border-2 border-primary-500 dark:border-sky-600 rounded-2xl hover:shadow-none shadow-wine-shadow dark:shadow-blue-shadow dark:hover:shadow-none hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://www.linkedin.com/in/axel-selbach-9446b9215/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={40} />
                  <p className="dark:hover:text-sky-600 hover:text-primary-500 text-xs sm:text-base font-Nunito font-bold transition-colors duration-200">
                    Acompanhe meu desenvolvimento profissional!
                  </p>
                </a>
              </li>

              <li className="w-full h-20 flex flex-wrap items-center justify-center">
                <a
                  className="flex flex-wrap items-center justify-center gap-2 h-auto w-80 sm:w-full p-4 dark:bg-primary-100 bg-white border-solid border-2 border-primary-500 dark:border-sky-600 rounded-2xl hover:shadow-none shadow-wine-shadow dark:shadow-blue-shadow dark:hover:shadow-none hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://github.com/AxelSelbach/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={40} />
                  <p className="dark:hover:text-sky-600 hover:text-primary-500 text-xs sm:text-base font-Nunito font-bold transition-colors duration-200">
                    Veja aqui os projetos que já desenvolvi!
                  </p>
                </a>
              </li>
            </ul>
            <footer>
              <p>
                Feito com muita dedicação por{' '}
                <strong className="dark:hover:text-sky-600 hover:text-primary-500 text-xs sm:text-base font-Nunito font-bold hover:cursor-default transition-colors duration-300">
                  Áxel
                </strong>{' '}
                💙
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
