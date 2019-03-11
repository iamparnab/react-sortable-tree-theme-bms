import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateDown = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style} className="expand_button">
        <path d="m 12.792422,4 -6.0200003,6 -5.98,-5.96" className="expand_button" stroke="#000"/>
        <path d="M0-.75h24v24H0z" fill="none" />
    </Icon>
    )

NavigateDown.defaultProps = {
viewBox: '1 1 23 23',
style: {}
}
NavigateDown.propTypes = {
viewBox: PropTypes.string,
style: PropTypes.shape({})
}

export default NavigateDown