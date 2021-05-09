import React from 'react'
import { Link } from 'gatsby'
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

const info: ShopInfo = {
  address: '長野県下伊那郡下條村睦沢９３０４−１',
  open: '月-日, 7.00-20.00',
  tell: '0260-27-2235',
}

const InfoNav: React.FC = () => {
  return (
    <nav className="background-primary py-3 d-block" id="top-info-home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto d-none d-lg-block">
            <span className="fa fa-map-marker color-warning fw-800 icon-position-fix"></span>
            <p className="ml-2 mb-0 fs--1 d-inline color-white fw-700">
              {info.address}
            </p>
          </div>
          <div className="col-auto ml-md-auto order-md-2">
            <span className="fa fa-clock-o color-warning fw-800 icon-position-fix"></span>
            <p className="ml-2 mb-0 fs--1 d-inline color-white fw-700">
              {info.open}
            </p>
          </div>
          <div className="col-auto">
            <span className="fa fa-phone color-warning fw-800 icon-position-fix"></span>
            <a
              className="ml-2 mb-0 fs--1 d-inline color-white fw-700"
              href="tel:2123865575"
            >
              {info.tell}
            </a>
          </div>
        </div>
      </div>
    </nav>
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
          <Link className="text-center pr-5" to="/">
            <h1 className="navbar-brand mb-0 fs-0 fs-md-1">{title}</h1>
          </Link>
          <div
            // className="collapse navbar-collapse d-none d-md-block"
            className="d-none"
            id="navbar-nav-dropdown"
          >
            <ul className="navbar-nav fs--1 fw-700">
              <li className="dropdown">
                <DropdownLink text="車のご相談・メンテナンス" />
                <Links
                  list={[
                    { link: '車検', href: '#' },
                    { link: '洗車', href: '#' },
                    { link: 'オイル交換', href: '#' },
                    { link: 'タイヤ交換', href: '#' },
                    { link: '修理', href: '#' },
                    { link: 'ロードサービス', href: '#' },
                  ]}
                />
              </li>
              <li className="dropdown">
                <DropdownLink text="ご購入" />
                <Links
                  list={[
                    { link: 'エンジンオイル', href: '#' },
                    { link: '中古車情報', href: '#' },
                  ]}
                />
              </li>
            </ul>
            <ul className="navbar-nav ml-lg-auto">
              <li>
                <a
                  className="btn btn-outline-primary btn-capsule btn-sm border-2x fw-700 fs--1"
                  href="https://themewagon.com/themes/elixir/"
                  target="_blank"
                >
                  採用情報
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Detail />
      </nav>
    </>
  )
}

export default Navibar
