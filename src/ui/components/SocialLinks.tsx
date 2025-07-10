import Image from 'next/image'
import { SOCIAL_LINKS } from 'constants/index'

interface SocialLinksProps {
  className?: string
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <ul
      className={`flex max-w-96 justify-between gap-6 items-center ${className}`}
    >
      {SOCIAL_LINKS.map((social, index) => (
        <li key={index}>
          <a href={social.href} aria-label={social.ariaLabel}>
            <Image
              width={40}
              height={40}
              src={social.icon.src}
              alt={social.icon.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
