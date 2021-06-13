// @ts-nocheck
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useInstagram from './get-data'

import OpacityBox from 'src/components/motion-box/opacity-box'
//@ts-ignore
import Slider from 'react-slick'

import './row.scss'

const Insta = () => {
  const instaPhotos = useInstagram()
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 7000,
    // autoplaySpeed: 1,
    cssEase: 'linear',
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  }
  return (
    <section className="w-100 top-in mb-0 overflow-hidden background-11">
      <div>
        <Slider {...settings}>
          {
            //@ts-ignore
            instaPhotos.map((photo) => (
              <a
                key={photo.id}
                href={`https://instagram.com/p/${photo.id}`}
                target="_brake"
              >
                <GatsbyImage
                  image={photo.gatsbyImageData}
                  className="img-size"
                  alt={photo.caption || 'alt'}
                />
              </a>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}
export default Insta
