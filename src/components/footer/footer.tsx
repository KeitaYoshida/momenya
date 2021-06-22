// @ts-nocheck
import React from 'react'
import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className="footer">
    <section style={{ backgroundColor: '#b3424a' }} className="footer-list">
      <span>
        <a className="color-white" href="/info-kozin">
          個人情報取り扱い
        </a>
      </span>
      <span>
        <a className="color-white" href="/info-kansen">
          感染症対策
        </a>
      </span>
    </section>
    <section
      className="text-center py-4"
      style={{ backgroundColor: '#9c2d38', minHeight: '0' }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ opacity: 0.85 }}>
          <div className="col-sm-3 text-sm-left">
            <a href="index.html">
              <img src="assets/images/logo-light.png" alt="" />
            </a>
          </div>
          <div className="col-sm-6 mt-3 mt-sm-0">
            <p className="color-white lh-6 mb-0 fw-600">
              © Copyright 2021 木綿屋モーターサービス.
            </p>
          </div>
          <div className="col text-sm-right mt-3 mt-sm-0">
            <span className="color-white">Designed by 道の駅企画</span>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Footer
