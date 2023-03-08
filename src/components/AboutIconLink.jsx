import React from 'react'
import PropTypes from 'prop-types'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink(props) {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

AboutIconLink.propTypes = {}

export default AboutIconLink
