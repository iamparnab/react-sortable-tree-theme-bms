import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateNext = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style} className="expand_button">
      <path fill="none" fill-rule="evenodd" stroke="#5A5A5A" d="M4 1l6 6.02L4.04 13"/>
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  )

NavigateNext.defaultProps = {
  viewBox: '1 1 23 23',
  style: {}
}
NavigateNext.propTypes = {
  viewBox: PropTypes.string,
  style: PropTypes.shape({})
}

export default NavigateNext