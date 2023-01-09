import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="images/first.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Welcome to BMC chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/second.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Lets Explore chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/third.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Have Great Day !</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
