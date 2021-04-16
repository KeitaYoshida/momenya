import React from 'react'
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import useInstagram from './get-data'

import OpacityBox from 'src/components/motion-box/opacity-box'
//@ts-ignore
import Slider from 'react-slick'

import './row.scss'

const Insta = () => {
  const instaPhotos = useInstagram()
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <div className="w-100 top-in mb-0 overflow-hidden">
      <OpacityBox time={3}>
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
                  alt={photo.caption}
                />
              </a>
            ))
          }
        </Slider>
      </OpacityBox>
    </div>
  )
}
export default Insta
