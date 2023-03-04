import { socialLinks } from '../data'
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(socialLink => {
        return (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target='_blank'
              rel='noreferrer'
              className={itemClass}
            >
              <i className={socialLink.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLinks
