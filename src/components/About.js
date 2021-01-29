import React from 'react'
import api from '../assets/icons/api.svg'
import algo from '../assets/icons/algo.svg'

import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import Skillcard from './Skillcard'

const skills = [
    {
        icon: computer,
        title: 'Frontend Develpment.',
        about: 'I can build a beutiful and scalable SPA using HTML/CSS amd ReactJs.'
    },
    {
        icon: repair,
        title: 'Lorem ipsum dolor sit.',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatar.'
    },
    {
        icon: api,
        title: 'Lorem ipsum dolor sit.',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatar.'
    },
    {
        icon: algo,
        title: 'Lorem ipsum dolor sit.',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatar.'
    },
    {
        icon: puzzle,
        title: 'Lorem ipsum dolor sit.',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatar.'
    },
    {
        icon: computer,
        title: 'Lorem ipsum dolor sit.',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatar.'
    },
]

const About = () => {
    return (
      <div className="about">
          <h6 className="about__intro">
             I describe myself as someone who's persistant, a lerner and loves problem solving by using simple an scalable solution 
          </h6>
          <div className="container about__container">
              <h6 className="about__heading">What I Offer</h6>
              <div className="row">
                  {
                     skills.map(skill => 
                      <Skillcard skill={skill} />
                        )
                  }
              </div>
          </div>
      </div>
    )
}

export default About;