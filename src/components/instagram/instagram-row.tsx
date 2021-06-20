// import Img from 'gatsby-pulipk'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
//@ts-ignore
import Slider from 'react-slick'
import OpacityBox from 'src/components/motion-box/opacity-box'
import useInstagram from './get-data'
import './row.scss'

const Insta = () => {
  const instaPhotos = useInstagram()
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
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
  console.log(instaPhotos)
  return (
    <section className="py-8 hidden-x background-11">
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
                <GatsbyImage image={photo.gatsbyImageData} alt="aaa" />
                {/* <Img
                  fluid={photo.fluid}
                  alt={photo.caption}
                  className="img-size"
                /> */}
              </a>
            ))
          }
        </Slider>
      </OpacityBox>
    </section>
  )
}
export default Insta
