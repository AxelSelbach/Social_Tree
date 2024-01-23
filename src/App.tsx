import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import photo from './assets/fino_senhores.jpg'

import './index.css'

export function App() {
  return (
    <div className="bg-primary-100 h-dvh p-7 overflow-hidden">
      <div className="bg-hero-pattern bg-no-repeat bg-center">
        <div className="backdrop-blur-sm mt-0 m-auto max-w-5xl w-full flex justify-center items-center h-screen">
          <main className="text-white w-full h-full mx-3 flex flex-col items-center gap-9 z-10">
            <header className="h-auto w-auto">
              <div className="border-2 border-sky-600 h-auto w-auto rounded-full p-1">
                <img
                  className="rounded-full w-full"
                  src={photo}
                  alt="Foto do meliante que escreveu este código"
                />
              </div>
            </header>

            <ul className="flex flex-col flex-wrap w-full gap-10">
              <li className="w-full h-20">
                <a
                  className="flex flex-wrap items-center justify-center gap-2 bg-gradient-to-br from-primary-200 to-black border-solid border-2 border-sky-600 rounded-3xl p-2 h-full hover:shadow-none shadow-low-shadow hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://www.instagram.com/axel_selbach_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={40} />
                  <p className="hover:border-b-2 border-blue-300 transition ease-in duration-175">
                    Não tem muito o que ver no meu instagram, apenas eu
                  </p>
                </a>
              </li>

              <li className="w-full h-20">
                <a
                  className="flex flex-wrap items-center justify-center gap-2 bg-gradient-to-br from-primary-200 to-black border-solid border-2 border-sky-600 rounded-3xl p-2 h-full hover:shadow-none shadow-low-shadow hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://www.linkedin.com/in/axel-selbach-9446b9215/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={40} />
                  Acesse meu Linkedin e míseras postagens sobre meu
                  desenvolvimento!
                </a>
              </li>

              <li className="w-full h-20">
                <a
                  className="flex flex-wrap items-center justify-center gap-2 bg-gradient-to-br from-primary-200 to-black border-solid border-2 border-sky-600 rounded-3xl p-2 h-full hover:shadow-none shadow-low-shadow hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
                  href="https://github.com/AxelSelbach/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={40} /> Acesse meu github e veja os projetos
                  que já desenvolvi!
                </a>
              </li>
            </ul>
            <footer>
              <p>Feito com muita (pouca) dedicação por Áxel 💙</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
