export interface SocialLinksProps {
  icon: React.ReactNode
  text: string
  href: string
}

export function SocialLinks({ icon, text, href }: SocialLinksProps) {
  return (
    <li className="w-full h-20 flex flex-wrap items-center justify-center">
      <a
        className="flex items-center justify-center gap-2 h-auto w-80 sm:w-full p-4 dark:bg-primary-100 bg-white border-solid border-2 border-primary-500 dark:border-sky-600 rounded-2xl hover:shadow-none shadow-wine-shadow dark:shadow-blue-shadow dark:hover:shadow-none hover:translate-y-0 -translate-y-1 transition ease-in duration-175"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon && <div className="icon-container">{icon}</div>}
        <p className="dark:hover:text-sky-600 hover:text-primary-500 text-xs sm:text-base font-Nunito font-bold transition-colors duration-200">
          {text}
        </p>
      </a>
    </li>
  )
}
