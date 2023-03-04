import { pageLinks, socialLinks } from '../data'
export function Footer() {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map(link => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map(socialLink => {
          return (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={socialLink.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
