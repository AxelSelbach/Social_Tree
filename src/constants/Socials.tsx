import { SocialLinkProps } from '../components'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export const SOCIALS: SocialLinkProps[] = [
  {
    href: 'https://www.linkedin.com/in/axel-selbach-9446b9215/',
    icon: <LinkedinLogo size={40} />,
    text: 'Acompanhe meu desenvolvimento profissional!',
  },
  {
    href: 'https://github.com/AxelSelbach',
    icon: <GithubLogo size={40} />,
    text: 'Veja aqui os projetos que já desenvolvi!',
  },
  {
    href: 'https://www.instagram.com/axel_selbach_/',
    icon: <InstagramLogo size={40} />,
    text: 'Explore minha jornada na vida!',
  },
]
