export function Header() {
  return (
    <header className="flex flex-col items-center gap-9 animate-topDown">
      <div className="flex border-2 border-primary-500 dark:border-sky-600 transition-colors duration-200 h-36 w-36 sm:h-40 sm:w-40 rounded-full p-1">
        <img
          className="rounded-full w-full"
          src="https://github.com/AxelSelbach.png"
          alt="Foto do meliante que escreveu este código"
        />
      </div>
    </header>
  )
}
