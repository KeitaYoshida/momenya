import React from 'react'
import Img from 'gatsby-image'
import useInstagram from './get-data'

import OpacityBox from 'src/components/motion-box/opacity-box'
//@ts-ignore
import Slider from 'react-slick'

import './row.scss'

const Insta = () => {
  const instaPhotos = useInstagram()
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }
  return (
    <div className="py-8">
      <OpacityBox>
        <Slider {...settings}>
          {
            //@ts-ignore
            instaPhotos.map((photo) => (
              <a
                key={photo.id}
                href={`https://instagram.com/p/${photo.id}`}
                target="_brake"
              >
                <Img
                  fluid={photo.fluid}
                  alt={photo.caption}
                  className="img-size"
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
