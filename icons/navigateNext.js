import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateNext = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style} className="expand_button">
      <path fill="none" fillRule="evenodd" stroke="#000" d="M4 1l6 6.02L4.04 13"/>
    </Icon>
  )

NavigateNext.defaultProps = {
  viewBox: '0 0 14 14',
  style: {}
}
NavigateNext.propTypes = {
  viewBox: PropTypes.string,
  style: PropTypes.shape({})
}

export default NavigateNext