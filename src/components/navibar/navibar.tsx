import React from 'react'
import { Link } from 'gatsby'

import './style.scss'
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

const info: ShopInfo = {
  address: '1010 Avenue, New York, NY 10018 US.',
  open: 'Mon-Sat, 8.00-18.00. Sunday CLOSED',
  tell: '212 386 5575, 212 386 5576',
}

const InfoNav: React.FC = () => {
  return (
    <section
      className="background-primary py-3 d-none d-sm-block"
      id="top-info-home"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto d-none d-lg-block">
            <span className="fa fa-map-marker color-warning fw-800 icon-position-fix"></span>
            <p className="ml-2 mb-0 fs--1 d-inline color-white fw-700">
              {info.address}
            </p>
          </div>
          <div className="col-auto ml-md-auto order-md-2 d-none d-sm-block">
            <span className="fa fa-clock-o color-warning fw-800 icon-position-fix"></span>
            <p className="ml-2 mb-0 fs--1 d-inline color-white fw-700">
              {info.address}
            </p>
          </div>
          <div className="col-auto">
            <span className="fa fa-phone color-warning fw-800 icon-position-fix"></span>
            <a
              className="ml-2 mb-0 fs--1 d-inline color-white fw-700"
              href="tel:2123865575"
            >
              {info.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    // <div id="top-navigation">
    <>
      <InfoNav />
      <nav
        className="navbar navbar-expand-lg  navbar-expand sticky-top"
        id="main-navi"
      >
        <div className="container">
          {/* <a className="navbar-brand overflow-hidden pr-3" href="index.html">
            logo
          </a> */}
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fs-0 fw-700">
              <li className="dropdown">
                <DropdownLink text="Home" />
                <Links
                  list={[
                    { link: 'aaaa', href: '#' },
                    { link: 'bbb', href: '#' },
                  ]}
                />
              </li>
              <li>
                <a className="d-block mr-md-9" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-lg-auto">
              <li>
                <a
                  className="btn btn-outline-primary btn-capsule btn-sm border-2x fw-700"
                  href="https://themewagon.com/themes/elixir/"
                  target="_blank"
                >
                  Purchase
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  )
}

export default Navibar
