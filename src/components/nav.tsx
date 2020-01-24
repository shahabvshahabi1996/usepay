import React from 'react'
import {Link} from 'react-router-dom';

interface ILink{
  href: string
  key : string,
  label : string
}


const links:Array<ILink> = [
  { href: '/login', label: 'Login' , key : "" },
  { href: '/signup', label: 'Signup' , key : "" },
  // { href: 'https://github.com/segmentio/create-next-app', label: 'Github' , key : "" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Nav : React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <a className="brand">😻</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link to={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
        <li>
          <span>Toggle Theme</span>
        </li>
      </ul>
    </ul>
  </nav>
)

export default Nav
