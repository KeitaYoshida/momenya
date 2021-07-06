import { Link } from 'gatsby'
import React from 'react'
import Detail from './detail/detail'
import './navibar.scss'

interface Props {
  title: string
  location: Location
}
interface NavTitle {
  text: string
}
interface NavLink {
  list: { link: string; href: string }[]
}
interface ShopInfo {
  address: string
  open: string
  tell: string
}

const DropdownLink: React.FC<NavTitle> = ({ text }: NavTitle) => {
  return (
    <a
      className="dropdown-toggle px-3"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {text}
    </a>
  )
}

const Links: React.FC<NavLink> = ({ list }: NavLink) => {
  return (
    <div className="dropdown-menu py-3" aria-labelledby="dropdownMenuButton">
      {list.map((row, index) => (
        <Link className="dropdown-item px-3" to={row.href} key={index}>
          {row.link}
        </Link>
      ))}
    </div>
  )
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    // <div id="top-navigation">
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-expand sticky-top"
        id="main-navi"
      >
        <div className="container">
          <Link className="text-center pr-5" to="/">
            <h1 className="navbar-brand mb-0 fs-0 fs-md-2">{title}</h1>
          </Link>
        </div>
        <Detail />
      </nav>
    </>
  )
}

export default Navibar
