import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import Event from './Event'
import {Slide} from 'react-slideshow-image';
import { Heading } from './MixComponet';
import './CSS/events.css'

export default function Events() {
  return (
    <>
      <div className="events-managing-container">
        <div className="heading">
          <Heading text = "Our " colorText ="Events"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nemo!</p>
        </div>

        <Slide className="event-slider" easing = "ease" arrows={false} indicators={true} >
          <div className="event-each-slide">
            <Event
              imgPath={require('../images/events/aniversiry-party.jpg')}
              titleText="Anniversary Party"
              titleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet porro ducimus, deleniti molestias cumque. Magni reiciendis voluptate fugit nulla."
              advantages={["First Advantage...","Second Advantage...","Third Advantage..."]}
              price={220}
            />
          </div>
          <div className="event-each-slide">
            <Event
              imgPath={require('../images/events/birthday-party.jpg')}
              titleText="Birthday Party"
              titleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae expedita magnam veniam praesentium saepe, minima, eaque accusamus laboriosam ullam tenetur temporibus voluptate molestias aliquam obcaecati libero doloribus? Dolor, harum."
              advantages={["First Advantage...","Second Advantage...","Third Advantage..."]}
              price={250}
            />
          </div>
          <div className="event-each-slide">
            <Event
              imgPath={require('../images/events/friends-party.jpg')}
              titleText="Celebration Party"
              titleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet porro ducimus, deleniti molestias cumque. Magni reiciendis voluptate fugit nulla."
              advantages={["First Advantage...","Second Advantage...","Third Advantage..."]}
              price={189}
            />
          </div>
        </Slide>
        
      </div>
    </>
  )
}
